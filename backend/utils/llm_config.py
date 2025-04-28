import os

# Merkezi LLM Sağlayıcı ve Model Konfigürasyonu
LLM_PROVIDERS = {
    "openai": {
        "api_key": os.getenv("OPENAI_API_KEY"),
        "endpoint": "https://api.openai.com/v1",
        "default_model": "gpt-4o"
    },
    "anthropic": {
        "api_key": os.getenv("ANTHROPIC_API_KEY"),
        "endpoint": "https://api.anthropic.com/v1",
        "default_model": "claude-3-7-sonnet-latest"
    },
    "groq": {
        "api_key": os.getenv("GROQ_API_KEY"),
        "endpoint": "https://api.groq.com/openai/v1",
        "default_model": "groq-llama3-70b-8192"
    },
    "openrouter": {
        "api_key": os.getenv("OPENROUTER_API_KEY"),
        "endpoint": os.getenv("OPENROUTER_API_BASE", "https://openrouter.ai/api/v1"),
        "default_model": "openrouter/google/gemini-2.5-flash-preview"
    }
}

MODEL_ALIASES = {
    "sonnet-3.7": "anthropic/claude-3-7-sonnet-latest",
    "gpt-4.1": "openai/gpt-4.1-2025-04-14",
    "gemini-flash-2.5": "openrouter/google/gemini-2.5-flash-preview",
    "grok-3": "xai/grok-3-fast-latest",
    "deepseek": "deepseek/deepseek-chat",
    "grok-3-mini": "xai/grok-3-mini-fast-beta",
}

def get_llm_provider_config(provider_name: str) -> dict:
    """
    Belirtilen LLM sağlayıcısının konfigürasyon sözlüğünü döndürür.
    Args:
        provider_name (str): Sağlayıcı adı (örneğin, 'openai', 'anthropic', 'groq', vb.)
    Returns:
        dict: Sağlayıcı konfigürasyonu, API anahtarı ve uç noktası dahil.
    """
    """Belirtilen sağlayıcıya ait konfigürasyonu döndürür."""
    return LLM_PROVIDERS.get(provider_name)

def get_model_real_name(model_name: str) -> str:
    """
    Model takma adını veya kısaltmasını, merkezi konfigürasyonda tanımlanan gerçek model adına çevirir.
    Args:
        model_name (str): Model takma adı veya kısaltması (örneğin, 'sonnet-3.7', 'gpt-4.1').
    Returns:
        str: Gerçek, tam nitelikli model adı (örneğin, 'anthropic/claude-3-7-sonnet-latest').
    """
    """Model alias'ını gerçek model adına çevirir."""
    return MODEL_ALIASES.get(model_name, model_name)
