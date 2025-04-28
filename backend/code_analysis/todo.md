# Güncel Refactoring ve Altyapı İyileştirme TODOs (2025-04-26)

## 1. LLM Sağlayıcılarını Merkezi ve Değiştirilebilir Hale Getirme
- [ ] 1.1 Kod tabanında Anthropic, Claude, OpenAI, GPT vb. sağlayıcı adlarının ve anahtarlarının hardcoded geçtiği tüm yerleri tespit et
- [ ] 1.2 Bu sağlayıcıları ve model isimlerini merkezi bir yapı (örn. utils/config.py veya ayrı bir LLM config dosyası) üzerinden yönetilecek şekilde refactor et
- [ ] 1.3 Tüm LLM çağrılarını bu merkezi yapıdan okunan değerlerle çalışacak şekilde güncelle
- [ ] 1.4 Ortak bir LLM sağlayıcı arayüzü (interface/adapter) oluştur, tüm çağrıları buradan yönlendir
- [ ] 1.5 Test ve kod incelemesi ile eskiye dönük hardcoded kullanım kalmadığını doğrula

## 2. Her Yerde LiteLLM Entegrasyonu ve Model Esnekliği
- [ ] 2.1 Kodda LLM çağrısı yapılan tüm fonksiyonları ve modülleri tespit et (özellikle agent, agentpress, services/llm.py, vb.)
- [ ] 2.2 Tüm LLM çağrılarını litellm ile uyumlu ve merkezi model seçimine açık şekilde refactor et
- [ ] 2.3 Model seçimini config veya environment üzerinden, dinamik olarak değiştirebilir hale getir
- [ ] 2.4 Tüm sağlayıcılar için (Anthropic, OpenAI, vb.) litellm ile çağrıların doğru çalıştığını test et
- [ ] 2.5 Dökümantasyon ve örnek kullanım ekle

## 3. Daytona'nın Local Docker'da Kullanılabilirliği
- [ ] 3.1 Projede daytona_sdk kullanım noktalarını ve entegrasyonlarını analiz et
- [ ] 3.2 Local Docker ortamında daytona'nın eksiksiz kurulup çalıştığını doğrula (gerekirse Dockerfile ve docker-compose güncelle)
- [ ] 3.3 Gerekli environment/config ayarlarını merkezi hale getir
- [ ] 3.4 Localde daytona ile sandbox/agent işlemlerinin uçtan uca testini yap
- [ ] 3.5 Kurulum ve kullanım adımlarını dökümante et (README veya ayrı bir guide)

---

# Backend Static Analysis & Documentation TODOs

## 1. Preparation & Scoping
- [x] 1.1 Define analysis scope (directories, files, constructs)
    - [x] 1.1.1 List all backend directories
    - [x] 1.1.2 Identify code files to include/exclude
    - [x] 1.1.3 Specify target code constructs (classes, functions, etc.)
- [x] 1.2 Set up `code_analysis/` folder
    - [x] 1.2.1 Check if folder exists, create if missing
    - [x] 1.2.2 Ensure .gitignore and README exist
- [x] 1.3 Prepare documentation templates
    - [x] 1.3.1 Create empty `dependencies.md`
    - [x] 1.3.2 Create empty `types_raw.txt` and/or `types.md`
    - [x] 1.3.3 Create empty `references.md`
    - [x] 1.3.4 Create empty `control_flow.md`
    - [x] 1.3.5 Create empty `todo.md` (done)

**Summary:**
Preparation & Scoping aşamasındaki tüm alt adımlar başarıyla tamamlandı. Analiz kapsamı, dahil/haricinde tutulacak dosyalar ve analiz edilecek kod yapıları net olarak belirlendi. code_analysis klasörü ve gerekli dokümantasyon şablonları hazırlandı.


## 2. Dependency Extraction
- [x] 2.1 Collect all import statements
    - [x] 2.1.1 Extracted all import statements from the main backend codebase (agent, agentpress, sandbox, services, supabase, utils). Both internal and external dependencies were captured for further organization.

    **Summary:**
    Kod tabanındaki tüm import ifadeleri başarıyla toplandı. agent, agentpress, sandbox, services, supabase ve utils dizinlerindeki Python dosyalarındaki hem dahili (proje içi) hem harici (üçüncü parti) bağımlılıklar tespit edildi. Sonraki adımda bu importlar modül, harici/dahili olarak kategorize edilecek.

- [x] 2.2 Organize imports by file/module
    - [x] Her dosyadaki import ifadeleri dosya bazında gruplandı. Her modülün hangi bağımlılıkları kullandığı net şekilde ayrıştırıldı.
- [x] 2.3 Classify third-party vs. internal
    - [x] Tüm importlar dahili (proje içi) ve harici (üçüncü parti) olarak sınıflandırıldı. Dahili bağımlılıklar genellikle `agent`, `agentpress`, `sandbox`, `services`, `utils` gibi modüllerden; harici bağımlılıklar ise `fastapi`, `pydantic`, `jwt`, `dotenv`, `supabase`, `litellm` gibi paketlerden oluşmaktadır.

    **Summary:**
    Kod tabanındaki tüm importlar dosya bazında toplandı ve organize edildi. Her dosya için kullanılan bağımlılıklar listelendi ve bunlar dahili/harici olarak işaretlendi. Sonraki adımda bu bilgiler dependencies.md dosyasında detaylı şekilde dokümante edilecek.

- [x] 2.4 Document in `dependencies.md`
    - [x] Tüm bağımlılıklar dosya bazında ve dahili/harici olarak `dependencies.md` dosyasına işlendi. Her Python dosyasının kullandığı modüller ve paketler detaylı şekilde listelendi.

    **Summary:**
    Bağımlılıkların dökümantasyonu tamamlandı. Her dosya için kullanılan tüm internal (proje içi) ve third-party (üçüncü parti) bağımlılıklar ayrıntılı olarak `dependencies.md` dosyasında yer almakta. Sonraki adımda type hint ve annotation çıkarımı yapılacak.


## 3. Type Hints & Annotations Extraction
- [x] 3.1 List all classes/functions/methods
    - [x] Tüm ana Python dosyalarındaki class, fonksiyon ve method tanımları başarıyla listelendi. Her modül ve alt modül için kapsamlı bir sembol haritası oluşturuldu.

    **Summary:**
    Kod tabanındaki tüm class, fonksiyon ve method tanımları çıkarıldı. Her dosyada hangi sembollerin tanımlı olduğu belirlendi. Sonraki adımda bunların type hint (parametre, dönüş tipi, attribute) bilgileri detaylı olarak çıkarılacak.

- [x] 3.2 Extract type hints for:
    - [x] 3.2.1 Parameters
    - [x] 3.2.2 Return types
    - [x] 3.2.3 Class attributes
- [x] 3.3 Organize by file/symbol
- [x] 3.4 Document in `types_raw.txt`/`types.md`

    **Summary:**
    Tüm ana backend modülleri için parametre, dönüş tipi ve class attribute type hint/annotation çıkarımı tamamlandı ve dosya/sembol bazında organize edilerek `types_raw.txt` ve gerekirse `types.md` dosyalarına işlendi.

## 4. Reference Mapping
- [x] 4.1 List all definitions
- [x] 4.2 Identify all usages
- [x] 4.3 Map definitions to usages
- [x] 4.4 Document in `references.md`

    **Summary:**
    Tüm fonksiyon, class ve method tanımları ile bunların kod tabanındaki tüm kullanımları eşleştirildi ve `references.md` dosyasında detaylı şekilde dokümante edildi.

## 5. Control Flow Analysis
- [x] 5.1 Detect all control flow constructs
- [x] 5.2 Extract code snippets
- [x] 5.3 Organize by file/function
- [x] 5.4 Document in `control_flow.md`

    **Summary:**
    Kod tabanındaki tüm kontrol akışı yapıları (if, for, while, try/except, vb.) tespit edildi, ilgili kod parçacıkları çıkarıldı ve dosya/fonksiyon bazında organize edilerek `control_flow.md` dosyasına işlendi.

## 6. Design Patterns & Architecture
- [x] 6.1 Identify design patterns
- [x] 6.2 Document architectural decisions
- [x] 6.3 Store in dedicated file/section

    **Summary:**
    Kod tabanında kullanılan tüm tasarım desenleri ve mimari kararlar tespit edilerek ilgili dökümantasyon dosyalarına işlendi.

## 7. Documentation & Review
- [x] 7.1 Review for completeness/accuracy
- [x] 7.2 Ensure consistency
- [x] 7.3 Add summaries/navigation aids
- [x] 7.4 Store in `code_analysis/`

    **Summary:**
    Tüm analiz ve dökümantasyon adımları tamamlandı, tutarlılık ve bütünlük kontrolü sağlandı, özetler ve gezinme kolaylığı için yardımcı bölümler eklendi. Sonuçlar `code_analysis/` klasöründe saklanıyor.
