# References

This file maps function and class definitions to their usages across the backend codebase.

---

## DataProvidersTool (class)
- **Defined in:** `agent/tools/data_providers_tool.py`
    ```python
    class DataProvidersTool(Tool):
        """Tool for making requests to various data providers."""
        def __init__(self):
            super().__init__()
            self.register_data_providers = {
                "linkedin": LinkedinProvider(),
                "yahoo_finance": YahooFinanceProvider(),
                "amazon": AmazonProvider(),
                "zillow": ZillowProvider(),
                "twitter": TwitterProvider()
            }
        ...
    ```
- **Used in:**
    - Registered as a tool in the agent's toolset (see agent/run.py and agent/api.py):
        ```python
        from agent.tools.data_providers_tool import DataProvidersTool
        data_providers_tool = DataProvidersTool()
        ...
        # Used in agent logic for data provider endpoint discovery and calls
        ```
    - Provides endpoints for agent actions (e.g., via `get_data_provider_endpoints`, `execute_data_provider_call`).
    - Used by agent endpoints to interact with external data sources (LinkedIn, Amazon, Yahoo Finance, etc).

---

## ThreadManager (class)
- **Defined in:** `agentpress/thread_manager.py`
    ```python
    class ThreadManager:
        """Manages conversation threads with LLM models and tool execution."""
        def __init__(self):
            self.db = DBConnection()
            self.tool_registry = ToolRegistry()
            self.response_processor = ResponseProcessor(
                tool_registry=self.tool_registry,
                add_message_callback=self.add_message
            )
            self.context_manager = ContextManager()
        ...
    ```
- **Used in:**
    - `agent/api.py` and `agent/run.py`:
        - As a global/shared dependency for agent endpoints and background tasks.
        - Instantiated and passed to agent logic:
            ```python
            from agentpress.thread_manager import ThreadManager
            ...
            thread_manager = ThreadManager()
            ...
            client = await thread_manager.db.client
            ```
        - Passed to tools (e.g., `SandboxFilesTool`, `SandboxShellTool`) for thread-aware operations.
    - Provides methods for thread/message management, tool registration, and LLM interactions throughout the backend.

---

## InitiateAgentResponse (class)
- **Defined in:** `agent/api.py`
    ```python
    class InitiateAgentResponse(BaseModel):
        thread_id: str
        agent_run_id: Optional[str] = None
    ```
- **Used in:**
    - `agent/api.py`:
        - As the `response_model` in the `@router.post("/agent/initiate", response_model=InitiateAgentResponse)` endpoint:
            ```python
            @router.post("/agent/initiate", response_model=InitiateAgentResponse)
            async def initiate_agent_with_files(...):
                ...
            ```
        - Returned as the response when a new agent session is initiated with files.

---

## AgentStartRequest (class)
- **Defined in:** `agent/api.py`
    ```python
    class AgentStartRequest(BaseModel):
        model_name: Optional[str] = "anthropic/claude-3-7-sonnet-latest"
        enable_thinking: Optional[bool] = False
        reasoning_effort: Optional[str] = 'low'
        stream: Optional[bool] = True
        enable_context_manager: Optional[bool] = False
    ```
- **Used in:**
    - `agent/api.py`:
        - As the `body` parameter type in the `start_agent` endpoint:
            ```python
            async def start_agent(
                thread_id: str,
                body: AgentStartRequest = Body(...),
                user_id: str = Depends(get_current_user_id)
            )
            ```
        - Passed to agent logic to configure agent startup parameters.

---
