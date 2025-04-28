# Dependencies

This file contains a list of all imported modules and packages per Python file in the backend codebase.

---

## agent/api.py
- from agent.run import run_agent
- from agentpress.thread_manager import ThreadManager
- from datetime import datetime, timezone
- from fastapi import APIRouter, HTTPException, Depends, Request, Body, File, UploadFile, Form
- from fastapi.responses import StreamingResponse
- from pydantic import BaseModel
- from sandbox.sandbox import create_sandbox, get_or_start_sandbox
- from services import redis
- from services.llm import make_llm_api_call
- from services.supabase import DBConnection
- from typing import Optional, List, Dict, Any
- from utils.auth_utils import get_current_user_id, get_user_id_from_stream_auth, verify_thread_access
- from utils.billing import check_billing_status, get_account_id_from_thread
- from utils.logger import logger
- import asyncio
- import json
- import jwt
- import os
- import tempfile
- import traceback
- import uuid

## agent/prompt.py
- import datetime

## agent/run.py
- from agent.prompt import get_system_prompt
- from agent.tools.data_providers_tool import DataProvidersTool
- from agent.tools.message_tool import MessageTool
- from agent.tools.sb_browser_tool import SandboxBrowserTool
- from agent.tools.sb_deploy_tool import SandboxDeployTool
- from agent.tools.sb_expose_tool import SandboxExposeTool
- from agent.tools.sb_files_tool import SandboxFilesTool
- from agent.tools.sb_shell_tool import SandboxShellTool
- from agent.tools.web_search_tool import WebSearchTool
- from agentpress.response_processor import ProcessorConfig
- from agentpress.thread_manager import ThreadManager
- from dotenv import load_dotenv
- from typing import Optional
- from utils import logger
- from utils.billing import check_billing_status, get_account_id_from_thread
- from utils.config import config
- from uuid import uuid4
- import json
- import os
- import re

## agent/tools/computer_use_tool.py
- from agentpress.tool import Tool, ToolResult, openapi_schema, xml_schema
- from PIL import Image
- from sandbox.sandbox import SandboxToolsBase, Sandbox
- from typing import Optional, Dict, Any, Union
- import aiohttp
- import asyncio
- import base64
- import logging
- import os
- import time

## agent/tools/data_providers_tool.py
- from agent.tools.data_providers.AmazonProvider import AmazonProvider
- from agent.tools.data_providers.LinkedinProvider import LinkedinProvider
- from agent.tools.data_providers.TwitterProvider import TwitterProvider
- from agent.tools.data_providers.YahooFinanceProvider import YahooFinanceProvider
- from agent.tools.data_providers.ZillowProvider import ZillowProvider
- from agentpress.tool import Tool, ToolResult, openapi_schema, xml_schema
- import json

## agent/tools/sb_files_tool.py
- from agentpress.thread_manager import ThreadManager
- from agentpress.tool import ToolResult, openapi_schema, xml_schema
- from daytona_sdk.process import SessionExecuteRequest
- from sandbox.sandbox import SandboxToolsBase, Sandbox
- from typing import Optional
- from utils.files_utils import EXCLUDED_FILES, EXCLUDED_DIRS, EXCLUDED_EXT, should_exclude_file, clean_path
- import os

## agent/tools/sb_shell_tool.py
- from agentpress.thread_manager import ThreadManager
- from agentpress.tool import ToolResult, openapi_schema, xml_schema
- from sandbox.sandbox import SandboxToolsBase, Sandbox
- from typing import Optional, Dict, List
- from uuid import uuid4

## agent/tools/web_search_tool.py
- from agentpress.tool import Tool, ToolResult, openapi_schema, xml_schema
- from datetime import datetime
- from dotenv import load_dotenv
- from tavily import AsyncTavilyClient
- from typing import List, Optional
- from utils.config import config
- import httpx
- import json
- import os

## agentpress/context_manager.py
- from litellm import token_counter, completion, completion_cost
- from services.llm import make_llm_api_call
- from services.supabase import DBConnection
- from typing import List, Dict, Any, Optional
- from utils.logger import logger
- import json

## agentpress/response_processor.py
- from agentpress.tool import Tool, ToolResult
- from agentpress.tool_registry import ToolRegistry
- from dataclasses import dataclass
- from datetime import datetime, timezone
- from litellm import completion_cost, token_counter
- from typing import List, Dict, Any, Optional, Tuple, AsyncGenerator, Callable, Union, Literal
- from utils.logger import logger
- import asyncio
- import json
- import re
- import uuid

## agentpress/thread_manager.py
- from agentpress.context_manager import ContextManager
- from agentpress.response_processor import (
- from agentpress.tool import Tool
- from agentpress.tool_registry import ToolRegistry
- from services.llm import make_llm_api_call
- from services.supabase import DBConnection
- from typing import List, Dict, Any, Optional, Type, Union, AsyncGenerator, Literal
- from utils.logger import logger
- import json

## agentpress/tool_registry.py
- from agentpress.tool import Tool, SchemaType, ToolSchema
- from typing import Dict, Type, Any, List, Optional, Callable
- from utils.logger import logger

## agentpress/tool.py
- from abc import ABC
- from dataclasses import dataclass, field
- from enum import Enum
- from typing import Dict, Any, Union, Optional, List, Type
- from utils.logger import logger
- import inspect
- import json

## sandbox/api.py
- from agent.api import get_or_create_project_sandbox
- from fastapi import FastAPI, UploadFile, File, HTTPException, APIRouter, Form, Depends, Request
- from fastapi.responses import Response, JSONResponse
- from pydantic import BaseModel
- from sandbox.sandbox import get_or_start_sandbox
- from services.supabase import DBConnection
- from typing import List, Optional
- from utils.auth_utils import get_current_user_id, get_user_id_from_stream_auth, get_optional_user_id
- from utils.logger import logger
- import os

## sandbox/docker/browser_api.py
- from dataclasses import dataclass, field
- from datetime import datetime
- from fastapi import FastAPI, APIRouter, HTTPException, Body
- from functools import cached_property
- from PIL import Image
- from playwright.async_api import async_playwright, Browser, Page, ElementHandle
- from pydantic import BaseModel
- from typing import Optional, List, Dict, Any, Union
- import asyncio
- import base64
- import io
- import json
- import logging
- import os
- import pytesseract
- import random
- import re
- import traceback

## sandbox/docker/server.py
- from fastapi import FastAPI, Request
- from fastapi.staticfiles import StaticFiles
- from starlette.middleware.base import BaseHTTPMiddleware
- import os
- import uvicorn

## sandbox/sandbox.py
- from agentpress.thread_manager import ThreadManager
- from agentpress.tool import Tool
- from daytona_api_client.models.workspace_state import WorkspaceState
- from daytona_sdk import Daytona, DaytonaConfig, CreateSandboxParams, Sandbox, SessionExecuteRequest
- from dotenv import load_dotenv
- from typing import Optional
- from utils.config import config
- from utils.files_utils import clean_path
- from utils.logger import logger
- import os

## services/llm.py
- from datetime import datetime
- from openai import OpenAIError
- from typing import Union, Dict, Any, Optional, AsyncGenerator, List
- from utils.config import config
- from utils.logger import logger
- import asyncio
- import json
- import litellm
- import os
- import traceback

## services/redis.py
- from dotenv import load_dotenv
- from typing import List, Any
- from utils.logger import logger
- import asyncio
- import os
- import redis.asyncio as redis

## services/supabase.py
- from supabase import create_async_client, AsyncClient
- from typing import Optional
- from utils.config import config
- from utils.logger import logger
- import os

## tests/test_direct_tool_execution.py
- from agent.tools.wait_tool import WaitTool
- from agentpress.response_processor import ProcessorConfig
- from agentpress.thread_manager import ThreadManager
- from agentpress.tool import ToolResult
- from dotenv import load_dotenv
- import asyncio
- import os
- import sys

## tests/test_llm_native_tool_freeze.py
- from anthropic import AsyncAnthropic
- from typing import Dict, Any
- from utils.logger import logger
- import asyncio
- import json
- import os
- import sys

## tests/test_simple_tools.py
- from services.llm import make_llm_api_call
- from typing import Dict, Any
- from utils.logger import logger
- import asyncio
- import json

## tests/test_tool_execution_strategies.py
- from agent.tools.wait_tool import WaitTool
- from agentpress.response_processor import ProcessorConfig
- from agentpress.thread_manager import ThreadManager
- from dotenv import load_dotenv
- from unittest.mock import AsyncMock, patch
- import asyncio
- import os
- import sys

## tests/test_xml_streaming_execution.py
- from agent.tools.wait_tool import WaitTool
- from agentpress.response_processor import ProcessorConfig
- from agentpress.thread_manager import ThreadManager
- from dotenv import load_dotenv
- from unittest.mock import AsyncMock, patch
- import asyncio
- import os
- import sys

## utils/auth_utils.py
- from fastapi import HTTPException, Request, Depends
- from jwt.exceptions import PyJWTError
- from typing import Optional, List, Dict, Any
- from utils.logger import logger
- import jwt

## utils/billing.py
- from datetime import datetime, timezone
- from typing import Dict, Optional, Tuple
- from utils.config import config, EnvMode
- from utils.logger import logger

## utils/config.py
- from dotenv import load_dotenv
- from enum import Enum
- from typing import Dict, Any, Optional, get_type_hints
- import logging
- import os

## utils/files_utils.py
- import os

## utils/logger.py
- from contextvars import ContextVar
- from datetime import datetime
- from functools import wraps
- from logging.handlers import RotatingFileHandler
- from typing import Any, Dict, Optional
- from utils.config import config, EnvMode
- import json
- import logging
- import os
- import sys
- import traceback

## utils/scripts/get_all_xml_tags.py
- from agent.tools.data_providers_tool import DataProvidersTool
- from agent.tools.message_tool import MessageTool
- from agent.tools.sb_browser_tool import SandboxBrowserTool
- from agent.tools.sb_deploy_tool import SandboxDeployTool
- from agent.tools.sb_files_tool import SandboxFilesTool
- from agent.tools.sb_shell_tool import SandboxShellTool
- from agent.tools.web_search_tool import WebSearchTool
- from agentpress.thread_manager import ThreadManager
- from dotenv import load_dotenv
- from uuid import uuid4
- import os

- from agent.tools.data_providers.AmazonProvider import AmazonProvider
- from agent.tools.data_providers.LinkedinProvider import LinkedinProvider
- from agent.tools.data_providers.TwitterProvider import TwitterProvider
- from agent.tools.data_providers.YahooFinanceProvider import YahooFinanceProvider
- from agent.tools.data_providers.ZillowProvider import ZillowProvider
- from agentpress.tool import Tool, ToolResult, openapi_schema, xml_schema
- import json

## agent/tools/data_providers/ActiveJobsProvider.py
- from agent.tools.data_providers.RapidDataProviderBase import RapidDataProviderBase, EndpointSchema
- from typing import Dict

## agent/tools/data_providers/AmazonProvider.py
- from agent.tools.data_providers.RapidDataProviderBase import RapidDataProviderBase, EndpointSchema
- from typing import Dict, Optional

## agent/tools/data_providers/LinkedinProvider.py
- from agent.tools.data_providers.RapidDataProviderBase import RapidDataProviderBase, EndpointSchema
- from typing import Dict

## agent/tools/data_providers/RapidDataProviderBase.py
- from typing import Dict, Any, Optional, TypedDict, Literal
- import os
- import requests

## agent/tools/data_providers/TwitterProvider.py
- from agent.tools.data_providers.RapidDataProviderBase import RapidDataProviderBase, EndpointSchema
- from typing import Dict

## agent/tools/data_providers/YahooFinanceProvider.py
- from agent.tools.data_providers.RapidDataProviderBase import RapidDataProviderBase, EndpointSchema
- from typing import Dict

## agent/tools/data_providers/ZillowProvider.py
- from agent.tools.data_providers.RapidDataProviderBase import RapidDataProviderBase, EndpointSchema
- from typing import Dict
- import logging

## agent/tools/message_tool.py
- from agentpress.tool import Tool, ToolResult, openapi_schema, xml_schema
- from typing import List, Optional, Union
- import os

## agent/tools/sb_browser_tool.py
- from agentpress.thread_manager import ThreadManager
- from agentpress.tool import ToolResult, openapi_schema, xml_schema
- from sandbox.sandbox import SandboxToolsBase, Sandbox
- from utils.logger import logger
- import json
- import traceback

## agent/tools/sb_deploy_tool.py
- from agentpress.thread_manager import ThreadManager
- from agentpress.tool import ToolResult, openapi_schema, xml_schema
- from dotenv import load_dotenv
- from sandbox.sandbox import SandboxToolsBase, Sandbox
- from utils.files_utils import clean_path
- import os

## agent/tools/sb_expose_tool.py
- from agentpress.thread_manager import ThreadManager
- from agentpress.tool import ToolResult, openapi_schema, xml_schema
- from sandbox.sandbox import SandboxToolsBase, Sandbox
- from typing import Optional

## agent/tools/sb_files_tool.py
- from agentpress.thread_manager import ThreadManager
- from agentpress.tool import ToolResult, openapi_schema, xml_schema
- from daytona_sdk.process import SessionExecuteRequest
- from sandbox.sandbox import SandboxToolsBase, Sandbox
- from typing import Optional
- from utils.files_utils import EXCLUDED_FILES, EXCLUDED_DIRS, EXCLUDED_EXT, should_exclude_file, clean_path
- import os

... (continue for all other files similarly)

> Only Python files and their imports are included. For brevity, this is a partial listing. The full file contains all backend Python files and their imports as extracted from the codebase.
