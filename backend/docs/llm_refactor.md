# LLM Provider & Model Centralization Refactor

## Purpose
This document explains the refactoring of LLM provider/model handling in the backend. The goal is to centralize all LLM provider configurations (API keys, endpoints, model names/aliases) and eliminate hardcoded references throughout the codebase. This change improves maintainability, security, and flexibility.

## Key Changes

### 1. Centralized Configuration
- All LLM provider API keys, endpoints, and default models are now managed in `utils/llm_config.py`.
- Model aliases (e.g., `sonnet-3.7`, `gpt-4.1`) are mapped to real model names in the same file.

### 2. Refactored Usage
- All code that previously hardcoded provider/model names or API keys now imports and uses `get_llm_provider_config` and `get_model_real_name` from `utils/llm_config.py`.
- No direct use of provider/model names or keys in business logic files.
- Model aliasing is handled centrally.

### 3. Backward Compatibility
- The public API and function signatures are preserved.
- Alias support ensures existing requests using old names still work.

### 4. How to Add a New Provider or Model
- Edit `utils/llm_config.py`:
  - Add a new entry to `LLM_PROVIDERS` for the provider (with keys, endpoint, default model).
  - Add any model aliases to `MODEL_ALIASES`.
- No changes needed elsewhere in the codebase.

### 5. Security
- All sensitive keys are loaded from environment variables, not hardcoded.

## Example Usage
```python
from utils.llm_config import get_llm_provider_config, get_model_real_name

real_model = get_model_real_name("sonnet-3.7")
provider_cfg = get_llm_provider_config("anthropic")
api_key = provider_cfg["api_key"]
```

## Impacted Files
- `services/llm.py`
- `agent/run.py`
- `agent/api.py`
- `agentpress/context_manager.py`
- `agentpress/thread_manager.py`

## Rationale
This refactor:
- Makes it easy to update or add providers/models project-wide.
- Removes risk of leaking sensitive info in code.
- Enables dynamic model selection and easier testing.

## Next Steps
- All new LLM integrations must use the centralized config.
- Review and update documentation as new providers/models are added.

---
*Last updated: 2025-04-27*
