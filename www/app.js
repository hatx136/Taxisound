// STATE & CONFIGURATION DEFAULTS
const DEFAULTS = {
    driver: {
        name: "Nguyễn Văn Tài",
        dob: "1990-01-01",
        gender: "male",
        license: "123456789012 (Hạng D)",
        avatar: "" // base64
    },
    car: {
        plate: "30A-999.99",
        model: "Toyota Vios",
        seats: "5",
        color: "Trắng",
        registry: "2027-12-31",
        image: "" // base64
    },
    sound: {
        chime: "dingdong",
        volume: "1",
        speed: "1",
        voice: "cloud_default",
        // Separated scripts for Vietnamese and English
        welcome_vi: "Xin kính chào quý khách. Chào mừng quý khách lên xe. Vui lòng thắt dây an toàn trong suốt quá trình xe di chuyển. Xe sẽ khởi hành trong ít phút. Chúc quý khách có chuyến đi tốt đẹp. Xin trân trọng cảm ơn.",
        welcome_en: "Welcome aboard. Please fasten your seatbelts during the ride. The vehicle will depart in a few moments. We wish you a wonderful trip. Thank you very much.",
        intro_vi: "Kính chào quý khách. Tôi là tài xế {name}. Hôm nay tôi rất vinh hạnh được phục vụ quý khách trên chiếc xe {model} mang biển kiểm soát {plate}. Chúc quý khách một chuyến đi thoải mái và an toàn.",
        intro_en: "Hello passengers. I am your driver {name}. Today, I am honored to serve you on this {model} with license plate {plate}. Wish you a comfortable and safe journey.",
        farewell_vi: "Kính thưa quý khách, xe sắp đến điểm dừng. Quý khách vui lòng kiểm tra lại điện thoại, hành lý và tư trang cá nhân. Quan sát kỹ phía sau và lưu ý mở cửa bên phải trước khi xuống xe. Tạm biệt quý khách và xin hẹn gặp lại.",
        farewell_en: "Dear passengers, we are approaching the destination. Please check your phone, luggage, and personal belongings. Look carefully behind and exit from the right door. Goodbye and see you again."
    },
    appearance: {
        background: "",
        logo: "",
        theme: "dark"
    },
    payment: {
        bank: "Vietcombank",
        accountNo: "1234567890",
        accountName: "NGUYEN VAN TAI",
        defaultAmount: "50000",
        currency: "VND",
        qrCode: "" // base64
    },
    ai: {
        geminiKey: ""
    },
    language: "vi" // 'vi' or 'en'
};

const TRANSLATIONS = {
    vi: {
        app_title: "Taxi Sounds",
        sidebar_subtitle: "Taxi & Dịch vụ",
        menu_dashboard: "Bảng điều khiển",
        menu_payment: "Thanh toán cước",
        menu_user: "Người dùng",
        menu_car: "Loại xe",
        menu_sound: "Âm thanh phát",
        menu_settings: "Cài đặt",
        status_ready: "Sẵn sàng",
        btn_welcome_lbl: "CHÀO MỪNG",
        btn_welcome_desc: "Khách lên xe",
        btn_intro_lbl: "GIỚI THIỆU",
        btn_intro_desc: "Tài xế & Loại xe",
        btn_farewell_lbl: "TẠM BIỆT",
        btn_farewell_desc: "Nhắc nhở hành lý",
        btn_payment_screen: "Thanh toán cước",
        btn_stop: "Dừng phát",
        title_payment: "Thanh toán cước xe",
        currency: "đ",
        no_qr_warning: "Chưa thiết lập QR Code trong cài đặt",
        label_bank: "Ngân hàng",
        label_account_no: "Số tài khoản",
        label_account_name: "Chủ tài khoản",
        title_user_info: "Thông tin người dùng",
        label_avatar: "Ảnh đại diện tài xế",
        choose_photo: "Chọn ảnh",
        label_driver_name: "Họ tên tài xế",
        label_driver_dob: "Ngày sinh",
        label_gender: "Giới tính",
        opt_male: "Nam",
        opt_female: "Nữ",
        label_driver_license: "Thông tin bằng lái",
        btn_save_user: "Lưu thông tin tài xế",
        title_car_info: "Thông tin loại xe",
        label_car_img: "Hình ảnh xe",
        choose_car_photo: "Chọn ảnh xe",
        label_car_plate: "Biển số xe",
        label_car_model: "Loại xe / Dòng xe",
        label_car_seats: "Số chỗ ngồi",
        label_car_color: "Màu xe",
        label_car_registry: "Hạn đăng kiểm",
        btn_save_car: "Lưu thông tin xe",
        title_sound_settings: "Cấu hình âm thanh phát",
        label_chime: "Âm hiệu thông báo (Chime)",
        opt_chime_dingdong: "Song âm Ding-Dong cổ điển",
        opt_chime_beep: "Tiếng Bíp kỹ thuật số dồn dập",
        opt_chime_bell: "Chuông gió ngân vang (Soft Bell)",
        opt_chime_double_beep: "Bíp kép hiện đại (Double Beep)",
        opt_chime_success: "Âm hiệu khởi hành (Ascending Chord)",
        opt_chime_elevator: "Chuông thang máy ngân (Elevator Ding)",
        opt_chime_wobble: "Âm lướt nhẹ nhàng (Subtle Wobble)",
        opt_chime_vn_airline: "Nhạc hiệu Vietnam Airlines (Đặc trưng)",
        opt_chime_none: "Không phát âm hiệu (Chỉ giọng đọc)",
        label_volume: "Âm lượng",
        label_speed: "Tốc độ đọc",
        label_voice_quality: "Kiểm tra giọng đọc tiếng Việt",
        btn_test_voice: "Nghe thử giọng mẫu",
        label_tags_title: "Nhãn điền động khả dụng:",
        tag_name: "Tên tài xế",
        tag_model: "Loại xe",
        tag_plate: "Biển số xe",
        label_script_welcome: "Kịch bản Chào mừng khách",
        label_script_intro: "Kịch bản Giới thiệu tài xế & xe",
        label_script_farewell: "Kịch bản Tạm biệt & nhắc nhở",
        btn_save_sound: "Lưu cấu hình âm thanh",
        title_app_appearance: "Tùy biến giao diện",
        label_bg_app: "Hình nền ứng dụng",
        btn_choose_bg: "Chọn ảnh nền",
        btn_reset: "Đặt lại",
        label_logo_app: "Logo ứng dụng (Góc trên phải)",
        btn_choose_logo: "Chọn logo",
        title_bank_config: "Cấu hình tài khoản thanh toán",
        label_bank_name: "Ngân hàng nhận",
        label_bank_account: "Số tài khoản nhận cước",
        label_bank_holder: "Chủ tài khoản (viết hoa không dấu)",
        label_default_amount: "Số tiền cước mặc định (đ)",
        label_qr_upload: "Hình ảnh mã QR nhận tiền (VietQR/Momo...)",
        upload_qr_photo: "Chọn ảnh QR Code",
        btn_save_payment: "Lưu cài đặt",
        label_language: "Ngôn ngữ hệ thống",
        opt_bank_other: "Khác (Tự nhập)",
        label_custom_bank: "Tên ngân hàng khác",
        menu_ai_agent: "Tác nhân AI",
        title_ai_agent: "Tác nhân AI (taxi_sound)",
        label_ai_prompt: "Yêu cầu của bạn đối với Tác nhân AI",
        label_ai_lang: "Ngôn ngữ đọc",
        label_ai_voice: "Giọng đọc AI",
        opt_ai_voice_female: "Giọng Nữ Cloud (Google)",
        opt_ai_voice_local: "Giọng Nữ Máy Local",
        btn_generate_ai: "Tạo & Phát âm thanh AI",
        label_ai_result: "Nội dung do Tác nhân AI tạo ra:",
        title_ai_config: "Cấu hình Tác nhân AI Cloud",
        label_gemini_key: "Gemini API Key (Tùy chọn)",
        gemini_key_help: "Nhận API Key miễn phí tại Google AI Studio. Nếu để trống, hệ thống sẽ sử dụng kịch bản dự phòng.",
        tab_ai_announce: "Thông báo chuyến đi",
        tab_ai_spotify: "Nhạc Spotify",
        label_spotify_theme_title: "Chọn chủ đề âm nhạc muốn phát:",
        label_custom_theme: "Hoặc nhập chủ đề khác tự do:",
        label_spotify_results: "Đề xuất nhạc từ taxi_sound:",
        btn_back_themes: "Chọn lại",
        theme_lofi: "Lofi Thư Giãn",
        theme_acoustic: "Acoustic Chill",
        theme_pop: "Pop Việt Thịnh Hành",
        theme_classical: "Không Lời/Cổ Điển",
        theme_remix: "Nhạc Trẻ Remix",
        theme_podcast: "Podcast",
        label_spotify_artists: "Chọn ca sĩ / Kênh:",
        btn_other_artists: "Gợi ý ca sĩ khác",
        btn_other_songs: "Gợi ý bài hát khác",
        btn_back_artists: "Chọn ca sĩ khác",
        label_spotify_play: "Phát trên Spotify",
        // New translations
        label_theme_setting: "Giao diện hệ thống",
        opt_theme_dark: "Tối (Dark Mode)",
        opt_theme_light: "Sáng (Light Mode)",
        label_currency_setting: "Đơn vị tiền tệ",
        label_voice_select: "Chọn giọng đọc",
        opt_voice_cloud_default: "Giọng Nữ Standard (Cloud)",
        opt_voice_cloud_female_warm: "Giọng Nữ Ấm Áp (Cloud)",
        opt_voice_cloud_male: "Giọng Nam Trầm (Cloud)",
        btn_payment_guidance: "Hướng dẫn thanh toán",
        btn_spotify_suggest: "Gợi ý nhạc Spotify",
        payment_guidance_template: "Kính thưa quý khách, số tiền cước thanh toán là {amount} {currency_name}. Quý khách có thể thanh toán bằng các phương thức: Tiền mặt, quét mã QR trên màn hình hoặc chuyển khoản theo thông tin hiển thị. Xin trân trọng cảm ơn.",
        currency_vnd: "đồng",
        currency_usd: "đô la"
    },
    en: {
        app_title: "Taxi Sounds",
        sidebar_subtitle: "Taxi & Rideshare",
        menu_dashboard: "Dashboard",
        menu_payment: "Fare Payment",
        menu_user: "Driver Info",
        menu_car: "Vehicle Info",
        menu_sound: "Voice Settings",
        menu_settings: "Settings",
        status_ready: "Ready",
        btn_welcome_lbl: "WELCOME",
        btn_welcome_desc: "Passenger Boarding",
        btn_intro_lbl: "INTRODUCE",
        btn_intro_desc: "Driver & Car Info",
        btn_farewell_lbl: "FAREWELL",
        btn_farewell_desc: "Baggage Reminder",
        btn_payment_screen: "Fare Payment",
        btn_stop: "Stop Voice",
        title_payment: "Taxi Fare Payment",
        currency: "$",
        no_qr_warning: "No QR Code set in configuration",
        label_bank: "Bank Name",
        label_account_no: "Account No.",
        label_account_name: "Account Holder",
        title_user_info: "User Information",
        label_avatar: "Driver Profile Photo",
        choose_photo: "Choose Photo",
        label_driver_name: "Driver Full Name",
        label_driver_dob: "Date of Birth",
        label_gender: "Gender",
        opt_male: "Male",
        opt_female: "Female",
        label_driver_license: "Driver License Info",
        btn_save_user: "Save Driver Info",
        title_car_info: "Vehicle Information",
        label_car_img: "Vehicle Photo",
        choose_car_photo: "Choose Car Photo",
        label_car_plate: "License Plate",
        label_car_model: "Vehicle Model",
        label_car_seats: "Number of Seats",
        label_car_color: "Vehicle Color",
        label_car_registry: "Registration Expiry",
        btn_save_car: "Save Vehicle Info",
        title_sound_settings: "Audio & Settings",
        label_chime: "Notification Sound (Chime)",
        opt_chime_dingdong: "Classic Ding-Dong",
        opt_chime_beep: "Digital Beep Beeps",
        opt_chime_bell: "Wind Chime (Soft Bell)",
        opt_chime_double_beep: "Modern Double Beep",
        opt_chime_success: "Ascending Arrival Chord",
        opt_chime_elevator: "Elevator Resonance Ding",
        opt_chime_wobble: "Subtle Sweep Wobble",
        opt_chime_vn_airline: "Vietnam Airlines Theme (Special)",
        opt_chime_none: "No Chime (Voice Only)",
        label_volume: "Volume",
        label_speed: "Speech Speed",
        label_voice_quality: "Test Speech Synthesis",
        btn_test_voice: "Test Sample Voice",
        label_tags_title: "Available Dynamic Tags:",
        tag_name: "Driver Name",
        tag_model: "Car Model",
        tag_plate: "License Plate",
        label_script_welcome: "Welcome Speech Script",
        label_script_intro: "Driver & Car Intro Script",
        label_script_farewell: "Farewell & Reminder Script",
        btn_save_sound: "Save Voice Configuration",
        title_app_appearance: "App Appearance",
        label_bg_app: "App Background Image",
        btn_choose_bg: "Select Background",
        btn_reset: "Reset Default",
        label_logo_app: "App Logo (Top Right)",
        btn_choose_logo: "Select Logo",
        title_bank_config: "Payment Account Settings",
        label_bank_name: "Receiving Bank",
        label_bank_account: "Account Number",
        label_bank_holder: "Account Holder (UPPERCASE)",
        label_default_amount: "Default Fare Amount",
        label_qr_upload: "Payment QR Code Image (VietQR/Momo...)",
        upload_qr_photo: "Upload QR Image",
        btn_save_payment: "Save Settings",
        label_language: "System Language",
        opt_bank_other: "Other (Manual Entry)",
        label_custom_bank: "Other Bank Name",
        menu_ai_agent: "AI Agent",
        title_ai_agent: "AI Agent (taxi_sound)",
        label_ai_prompt: "Enter prompt for AI Agent",
        label_ai_lang: "Speech Language",
        label_ai_voice: "AI Voice Engine",
        opt_ai_voice_female: "Cloud Female Voice (Google)",
        opt_ai_voice_local: "Local Female Voice",
        btn_generate_ai: "Generate & Play AI Audio",
        label_ai_result: "Text generated by AI Agent:",
        title_ai_config: "Cloud AI Agent Configuration",
        label_gemini_key: "Gemini API Key (Optional)",
        gemini_key_help: "Get a free API Key from Google AI Studio. If left blank, a template fallback is used.",
        tab_ai_announce: "Trip Announcement",
        tab_ai_spotify: "Spotify Music",
        label_spotify_theme_title: "Choose a music theme to play:",
        label_custom_theme: "Or enter another theme freely:",
        label_spotify_results: "Music recommendations from taxi_sound:",
        btn_back_themes: "Choose again",
        theme_lofi: "Relaxing Lofi",
        theme_acoustic: "Acoustic Chill",
        theme_pop: "Popular V-Pop",
        theme_classical: "Instrumental/Classical",
        theme_remix: "V-Pop Remix",
        theme_podcast: "Podcast",
        label_spotify_artists: "Choose Artist / Channel:",
        btn_other_artists: "Suggest other artists",
        btn_other_songs: "Suggest other songs",
        btn_back_artists: "Back to artists",
        label_spotify_play: "Play on Spotify",
        // New translations
        label_theme_setting: "System Appearance",
        opt_theme_dark: "Dark Mode",
        opt_theme_light: "Light Mode",
        label_currency_setting: "Currency Unit",
        label_voice_select: "Select Voice",
        opt_voice_cloud_default: "Standard Female (Cloud)",
        opt_voice_cloud_female_warm: "Warm Female (Cloud)",
        opt_voice_cloud_male: "Deep Male (Cloud)",
        btn_payment_guidance: "Payment Guidance",
        btn_spotify_suggest: "Spotify Music",
        payment_guidance_template: "Dear passenger, your fare payment amount is {amount} {currency_name}. You can pay using the following methods: cash, scanning the QR code on the screen, or transferring to the bank account shown. Thank you very much.",
        currency_vnd: "dong",
        currency_usd: "dollars"
    }
};

// Global State variables
let appState = {};
let tempQrBase64 = ""; // Temporary storage for uploaded QR until validation succeeds
let audioCtx = null; // Global AudioContext instance
let activeCloudAudio = null; // Global instance for playing cloud TTS audio

// Helper: Remove Vietnamese Accents
function removeAccents(str) {
    if (!str) return "";
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

// Load State from LocalStorage
function loadState() {
    try {
        appState.driver = Object.assign({}, DEFAULTS.driver, JSON.parse(localStorage.getItem('taxi_driver')));
    } catch(e) { appState.driver = { ...DEFAULTS.driver }; }
    
    try {
        appState.car = Object.assign({}, DEFAULTS.car, JSON.parse(localStorage.getItem('taxi_car')));
    } catch(e) { appState.car = { ...DEFAULTS.car }; }
    
    try {
        appState.sound = Object.assign({}, DEFAULTS.sound, JSON.parse(localStorage.getItem('taxi_sound')));
    } catch(e) { appState.sound = { ...DEFAULTS.sound }; }
    
    try {
        appState.appearance = Object.assign({}, DEFAULTS.appearance, JSON.parse(localStorage.getItem('taxi_appearance')));
    } catch(e) { appState.appearance = { ...DEFAULTS.appearance }; }
    
    try {
        appState.payment = Object.assign({}, DEFAULTS.payment, JSON.parse(localStorage.getItem('taxi_payment')));
    } catch(e) { appState.payment = { ...DEFAULTS.payment }; }
    
    try {
        appState.ai = Object.assign({}, DEFAULTS.ai, JSON.parse(localStorage.getItem('taxi_ai')));
    } catch(e) { appState.ai = { ...DEFAULTS.ai }; }
    
    appState.language = localStorage.getItem('taxi_language') || DEFAULTS.language;
}

// Save specific state parts
function saveState(key, data) {
    appState[key] = data;
    localStorage.setItem(`taxi_${key}`, JSON.stringify(data));
    updateUIForState();
}

// Helper: Apply Light/Dark Theme
function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    setupNavigation();
    setupForms();
    setupImageUploaders();
    setupAudioControllers();
    setupKeypad();
    
    // Apply initial language, appearance & theme
    changeLanguage(appState.language);
    applyAppearanceSettings();
    applyTheme(appState.appearance.theme || "dark");
    updateUIForState();
    setupSpotifyCompanion();

    // Register Service Worker for PWA installation and offline caching
    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js')
                .then(reg => console.log('Service Worker registered successfully:', reg.scope))
                .catch(err => console.warn('Service Worker registration failed:', err));
        });
    }
});

// NAVIGATION LOGIC
function setupNavigation() {
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const menuItems = document.querySelectorAll('.sidebar-menu .menu-item');

    const toggleSidebar = () => {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
    };

    menuToggleBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetSection = item.getAttribute('data-target');
            switchSection(targetSection);
            toggleSidebar();
        });
    });

    // Quick Payment screen toggle button on Dashboard
    document.getElementById('btnQuickPayment').addEventListener('click', () => {
        switchSection('payment-view');
    });

    // Language select inside Settings view (Safeguarded if element is removed)
    const selectLanguage = document.getElementById('selectLanguage');
    if (selectLanguage) {
        selectLanguage.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
            updateUIForState();
        });
    }

    // Theme select inside Settings view
    const selectTheme = document.getElementById('selectTheme');
    if (selectTheme) {
        selectTheme.addEventListener('change', (e) => {
            const updatedAppearance = { ...appState.appearance, theme: e.target.value };
            saveState('appearance', updatedAppearance);
            applyTheme(e.target.value);
        });
    }

    // Header Language Toggle Button click
    const headerLangBtn = document.getElementById('headerLangBtn');
    if (headerLangBtn) {
        headerLangBtn.addEventListener('click', () => {
            const nextLang = appState.language === 'vi' ? 'en' : 'vi';
            changeLanguage(nextLang);
            updateUIForState();
        });
    }
}

function switchSection(targetSection) {
    const activeSection = document.querySelector('.content-section.active');
    if (activeSection && activeSection.id === 'settings-view' && targetSection !== 'settings-view') {
        if (hasUnsavedSettings()) {
            const confirmMsg = appState.language === 'vi'
                ? "Bạn có các thay đổi cài đặt chưa được lưu. Bạn có muốn lưu lại trước khi chuyển trang không?"
                : "You have unsaved settings. Do you want to save them before leaving?";
            
            const result = confirm(confirmMsg);
            if (result) {
                const saveSuccess = savePaymentSettingsSilently();
                if (!saveSuccess) {
                    return; // Abort switching if save validation failed
                }
            } else {
                updateUIForState(); // Reset form changes
            }
        }
    }

    const menuItems = document.querySelectorAll('.sidebar-menu .menu-item');
    const sections = document.querySelectorAll('.content-section');

    menuItems.forEach(mi => {
        mi.classList.remove('active');
        if (mi.getAttribute('data-target') === targetSection) {
            mi.classList.add('active');
        }
    });

    sections.forEach(sec => {
        sec.classList.remove('active');
        if (sec.id === targetSection) {
            sec.classList.add('active');
        }
    });
}

// DYNAMIC UI TRANSLATION
function changeLanguage(lang) {
    appState.language = lang;
    localStorage.setItem('taxi_language', lang);
    
    // Sync the select value
    const selectLangEl = document.getElementById('selectLanguage');
    if (selectLangEl) selectLangEl.value = lang;

    // Update Header Button text
    const headerLangBtn = document.getElementById('headerLangBtn');
    if (headerLangBtn) headerLangBtn.textContent = lang === 'vi' ? 'VI' : 'EN';
    
    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            el.textContent = TRANSLATIONS[lang][key];
        }
    });
    
    // Update dynamic form input placeholders safely
    const setPlaceholder = (id, placeholder) => {
        const el = document.getElementById(id);
        if (el) el.placeholder = placeholder;
    };
    
    setPlaceholder('inputDriverName', lang === 'vi' ? 'Nguyễn Văn Tài' : 'John Doe');
    setPlaceholder('inputLicenseInfo', lang === 'vi' ? '123456789012 (Hạng D)' : 'License Class D');
    setPlaceholder('inputCarPlate', lang === 'vi' ? '30A-999.99' : '30A-999.99');
    setPlaceholder('inputCarModel', lang === 'vi' ? 'Toyota Vios' : 'Toyota Vios');
    setPlaceholder('inputAccountNo', lang === 'vi' ? 'Số tài khoản nhận tiền' : 'Account number');
    setPlaceholder('inputAccountName', lang === 'vi' ? 'Ví dụ: NGUYEN VAN TAI' : 'e.g. NGUYEN VAN TAI');
    setPlaceholder('inputDefaultAmount', lang === 'vi' ? '50000' : '50000');
    setPlaceholder('inputCustomBank', lang === 'vi' ? 'Nhập tên ngân hàng của bạn' : 'Enter your bank name');
}

// APPLY GLOBAL STYLING / CUSTOM BACKGROUND & LOGO
function applyAppearanceSettings() {
    const appBg = document.getElementById('appBackground');
    const defaultLogo = document.getElementById('defaultLogo');
    const logoContainer = document.getElementById('logoContainer');
    
    // Background
    if (appState.appearance.background) {
        appBg.style.background = `url(${appState.appearance.background})`;
        appBg.style.backgroundSize = 'cover';
        appBg.style.backgroundPosition = 'center';
    } else {
        appBg.style.background = ''; // default gradient
    }

    // Logo
    const oldLogoImg = logoContainer.querySelector('img');
    if (oldLogoImg) oldLogoImg.remove();

    if (appState.appearance.logo) {
        defaultLogo.classList.add('hidden');
        const logoImg = document.createElement('img');
        logoImg.src = appState.appearance.logo;
        logoImg.alt = "Logo";
        logoContainer.appendChild(logoImg);
    } else {
        defaultLogo.classList.remove('hidden');
    }
}

// DATA TO UI POPULATION
function updateUIForState() {
    const lang = appState.language;

    // Header & Sidebar Avatar/Name
    const sidebarAvatar = document.getElementById('sidebarAvatar');
    const sidebarAvatarFallback = document.getElementById('sidebarAvatarFallback');
    const sidebarUsername = document.getElementById('sidebarUsername');

    sidebarUsername.textContent = appState.driver.name || (lang === 'vi' ? "Tài xế" : "Driver");

    if (appState.driver.avatar) {
        sidebarAvatar.src = appState.driver.avatar;
        sidebarAvatar.classList.remove('hidden');
        sidebarAvatarFallback.classList.add('hidden');
    } else {
        sidebarAvatar.classList.add('hidden');
        sidebarAvatarFallback.classList.remove('hidden');
    }

    // Populate User Form
    document.getElementById('inputDriverName').value = appState.driver.name;
    document.getElementById('inputDriverDOB').value = appState.driver.dob;
    document.getElementById('selectGender').value = appState.driver.gender || "male";
    document.getElementById('inputLicenseInfo').value = appState.driver.license;
    
    const previewAvatar = document.getElementById('previewAvatar');
    const previewAvatarFallback = document.getElementById('previewAvatarFallback');
    if (appState.driver.avatar) {
        previewAvatar.src = appState.driver.avatar;
        previewAvatar.classList.remove('hidden');
        previewAvatarFallback.classList.add('hidden');
    } else {
        previewAvatar.src = "";
        previewAvatar.classList.add('hidden');
        previewAvatarFallback.classList.remove('hidden');
    }

    // Populate Car Form
    document.getElementById('inputCarPlate').value = appState.car.plate;
    document.getElementById('inputCarModel').value = appState.car.model;
    document.getElementById('inputCarSeats').value = appState.car.seats;
    document.getElementById('inputCarColor').value = appState.car.color;
    document.getElementById('inputCarRegistry').value = appState.car.registry;

    const previewCar = document.getElementById('previewCar');
    const previewCarFallback = document.getElementById('previewCarFallback');
    if (appState.car.image) {
        previewCar.src = appState.car.image;
        previewCar.classList.remove('hidden');
        previewCarFallback.classList.add('hidden');
    } else {
        previewCar.src = "";
        previewCar.classList.add('hidden');
        previewCarFallback.classList.remove('hidden');
    }

    // Populate Sound Form
    document.getElementById('selectChime').value = appState.sound.chime;
    document.getElementById('rangeVolume').value = appState.sound.volume;
    document.getElementById('rangeSpeed').value = appState.sound.speed;
    document.getElementById('valVolume').textContent = `${Math.round(appState.sound.volume * 100)}%`;
    document.getElementById('valSpeed').textContent = `${parseFloat(appState.sound.speed).toFixed(1)}x`;

    // Populate speech script based on active language
    document.getElementById('textWelcome').value = appState.sound[`welcome_${lang}`];
    document.getElementById('textIntro').value = appState.sound[`intro_${lang}`];
    document.getElementById('textFarewell').value = appState.sound[`farewell_${lang}`];

    // Populate Settings view
    const savedBank = appState.payment.bank || "VIETCOMBANK";
    const standardBanks = ["VIETCOMBANK", "TECHCOMBANK", "MBBANK", "BIDV", "VIETINBANK", "ACB", "VPBANK", "TPBANK", "SACOMBANK", "AGRIBANK"];
    const selectBank = document.getElementById('selectBank');
    const customBankGroup = document.getElementById('customBankGroup');
    const inputCustomBank = document.getElementById('inputCustomBank');

    if (selectBank) {
        if (standardBanks.includes(savedBank)) {
            selectBank.value = savedBank;
            if (customBankGroup) customBankGroup.classList.add('hidden');
            if (inputCustomBank) inputCustomBank.value = "";
        } else {
            selectBank.value = "other";
            if (customBankGroup) customBankGroup.classList.remove('hidden');
            if (inputCustomBank) inputCustomBank.value = savedBank;
        }
    }

    document.getElementById('inputAccountNo').value = appState.payment.accountNo;
    document.getElementById('inputAccountName').value = appState.payment.accountName;
    document.getElementById('inputDefaultAmount').value = appState.payment.defaultAmount;
    document.getElementById('inputGeminiKey').value = appState.ai.geminiKey || "";

    const previewQr = document.getElementById('previewQr');
    const previewQrFallback = document.getElementById('previewQrFallback');
    if (appState.payment.qrCode) {
        previewQr.src = appState.payment.qrCode;
        previewQr.classList.remove('hidden');
        previewQrFallback.classList.add('hidden');
    } else {
        previewQr.src = "";
        previewQr.classList.add('hidden');
        previewQrFallback.classList.remove('hidden');
    }
    
    document.getElementById('qrVerifyStatus').textContent = "";
    tempQrBase64 = appState.payment.qrCode;

    // Populate Payment View Screen fields
    const formattedFare = formatCurrency(appState.payment.defaultAmount);
    document.getElementById('fareAmount').value = formattedFare;
    
    document.getElementById('payBankName').textContent = appState.payment.bank;
    document.getElementById('payAccountNo').textContent = appState.payment.accountNo;
    document.getElementById('payAccountName').textContent = appState.payment.accountName;

    const paymentQrImg = document.getElementById('paymentQrImg');
    const paymentQrFallback = document.getElementById('paymentQrFallback');
    if (appState.payment.qrCode) {
        paymentQrImg.src = appState.payment.qrCode;
        paymentQrImg.classList.remove('hidden');
        paymentQrFallback.classList.add('hidden');
    } else {
        paymentQrImg.src = "";
        paymentQrImg.classList.add('hidden');
        paymentQrFallback.classList.remove('hidden');
    }

    // Populate Theme, Currency, and Voice in Cài đặt
    const selectTheme = document.getElementById('selectTheme');
    if (selectTheme) {
        selectTheme.value = appState.appearance.theme || "dark";
    }

    const selectCurrency = document.getElementById('selectCurrency');
    if (selectCurrency) {
        selectCurrency.value = appState.payment.currency || "VND";
    }

    const selectVoice = document.getElementById('selectVoice');
    if (selectVoice) {
        selectVoice.value = appState.sound.voice || "cloud_default";
    }

    // Update currency display symbol
    const currencyEl = document.querySelector('.fare-currency');
    if (currencyEl) {
        currencyEl.textContent = (appState.payment.currency === 'USD') ? '$' : 'đ';
    }
}

// Helper: Format number with thousands separator
function formatCurrency(amount) {
    if (!amount) return "0";
    let numStr = amount.toString().replace(/\D/g, "");
    if (!numStr) return "0";
    if (appState.payment.currency === 'USD') {
        return parseInt(numStr, 10).toLocaleString('en-US');
    }
    return parseInt(numStr, 10).toLocaleString('vi-VN');
}

// IMAGE UPLOADERS & CANVAS COMPRESSION
function setupImageUploaders() {
    const handleImageUpload = (inputElement, maxWidth, maxHeight, onCompressed) => {
        inputElement.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(event) {
                const img = new Image();
                img.onload = function() {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;
                    
                    if (width > height) {
                        if (width > maxWidth) {
                            height *= maxWidth / width;
                            width = maxWidth;
                        }
                    } else {
                        if (height > maxHeight) {
                            width *= maxHeight / height;
                            height = maxHeight;
                        }
                    }
                    
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    
                    const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
                    onCompressed(compressedBase64, file);
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        });
    };

    // 1. Driver Avatar
    handleImageUpload(
        document.getElementById('inputAvatar'), 
        300, 300, 
        (base64) => {
            const updatedDriver = { ...appState.driver, avatar: base64 };
            saveState('driver', updatedDriver);
        }
    );

    // 2. Car Photo
    handleImageUpload(
        document.getElementById('inputCarImage'), 
        600, 400, 
        (base64) => {
            const updatedCar = { ...appState.car, image: base64 };
            saveState('car', updatedCar);
        }
    );

    // 3. Custom Background (Settings Screen)
    handleImageUpload(
        document.getElementById('inputBgImage'), 
        800, 1200, 
        (base64) => {
            const updatedAppearance = { ...appState.appearance, background: base64 };
            saveState('appearance', updatedAppearance);
            applyAppearanceSettings();
        }
    );

    document.getElementById('btnResetBg').addEventListener('click', () => {
        const updatedAppearance = { ...appState.appearance, background: "" };
        saveState('appearance', updatedAppearance);
        applyAppearanceSettings();
    });

    // 4. Custom Logo (Settings Screen)
    handleImageUpload(
        document.getElementById('inputLogo'), 
        200, 200, 
        (base64) => {
            const updatedAppearance = { ...appState.appearance, logo: base64 };
            saveState('appearance', updatedAppearance);
            applyAppearanceSettings();
        }
    );

    document.getElementById('btnResetLogo').addEventListener('click', () => {
        const updatedAppearance = { ...appState.appearance, logo: "" };
        saveState('appearance', updatedAppearance);
        applyAppearanceSettings();
    });

    // 5. Payment QR Code Image Uploader with Validation
    document.getElementById('inputQrCode').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const statusEl = document.getElementById('qrVerifyStatus');
        statusEl.className = "help-text text-yellow";
        statusEl.textContent = appState.language === 'vi' ? "Đang quét và giải mã mã QR..." : "Scanning and decoding QR Code...";

        const enteredAccNo = document.getElementById('inputAccountNo').value.trim();
        const enteredAccName = document.getElementById('inputAccountName').value.trim();

        if (!enteredAccNo || !enteredAccName) {
            statusEl.className = "help-text text-red";
            statusEl.textContent = appState.language === 'vi' 
                ? "Lỗi: Bạn cần điền Số tài khoản và Chủ tài khoản trước khi chọn ảnh QR!" 
                : "Error: Enter Account Number and Holder Name first!";
            e.target.value = ""; 
            return;
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                
                try {
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const code = jsQR(imageData.data, imageData.width, imageData.height);
                    
                    if (code) {
                        const qrText = code.data;
                        console.log("Decoded QR payload:", qrText);
                        
                        const verification = validateQRText(qrText, enteredAccNo, enteredAccName);
                        if (verification.valid) {
                            statusEl.className = "help-text text-green";
                            statusEl.textContent = appState.language === 'vi' 
                                ? `Khớp! ${verification.msg}` 
                                : `Match! ${verification.msg}`;
                            
                            const maxW = 500;
                            const maxH = 500;
                            let w = img.width;
                            let h = img.height;
                            if (w > h) {
                                if (w > maxW) { h *= maxW / w; w = maxW; }
                            } else {
                                if (h > maxH) { w *= maxH / h; h = maxH; }
                            }
                            const compCanvas = document.createElement('canvas');
                            compCanvas.width = w;
                            compCanvas.height = h;
                            const compCtx = compCanvas.getContext('2d');
                            compCtx.drawImage(img, 0, 0, w, h);
                            
                            tempQrBase64 = compCanvas.toDataURL('image/jpeg', 0.7);
                            
                            const previewQr = document.getElementById('previewQr');
                            const previewQrFallback = document.getElementById('previewQrFallback');
                            previewQr.src = tempQrBase64;
                            previewQr.classList.remove('hidden');
                            previewQrFallback.classList.add('hidden');
                        } else {
                            statusEl.className = "help-text text-red";
                            statusEl.textContent = appState.language === 'vi' 
                                ? `Lỗi: ${verification.msg}` 
                                : `Error: ${verification.msg}`;
                            e.target.value = ""; 
                            tempQrBase64 = "";
                        }
                    } else {
                        statusEl.className = "help-text text-red";
                        statusEl.textContent = appState.language === 'vi' 
                            ? "Lỗi: Không nhận diện được mã QR từ hình ảnh này!" 
                            : "Error: No QR Code detected in this image!";
                        e.target.value = ""; 
                        tempQrBase64 = "";
                    }
                } catch (err) {
                    console.error("QR Scan error:", err);
                    statusEl.className = "help-text text-red";
                    statusEl.textContent = "Error scanning image.";
                    e.target.value = "";
                    tempQrBase64 = "";
                }
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    });
}

// EMVCo TLV Parser
function parseEMVCo(text) {
    const data = {};
    let index = 0;
    try {
        while (index < text.length) {
            if (index + 4 > text.length) break;
            const tag = text.substring(index, index + 2);
            const length = parseInt(text.substring(index + 2, index + 4), 10);
            index += 4;
            if (isNaN(length) || index + length > text.length) break;
            const value = text.substring(index, index + length);
            index += length;
            data[tag] = value;
        }
    } catch (e) {
        console.error("Error parsing EMVCo:", e);
    }
    return data;
}

// QR Matcher & Validator
function validateQRText(text, enteredAccNo, enteredAccName) {
    if (text.startsWith("000201")) {
        const topFields = parseEMVCo(text);
        const tag38Val = topFields["38"];
        let qrAccNo = "";
        if (tag38Val) {
            const subFields = parseEMVCo(tag38Val);
            const sub01Val = subFields["01"];
            if (sub01Val) {
                const bankFields = parseEMVCo(sub01Val);
                qrAccNo = bankFields["01"] || "";
            }
        }
        
        const qrAccName = topFields["59"] || "";
        if (!qrAccNo && !qrAccName) {
            return { valid: false, msg: "Mã QR chuẩn EMVCo thiếu thông tin thụ hưởng." };
        }
        
        const cleanEnteredAcc = enteredAccNo.replace(/\s+/g, "");
        const cleanQrAcc = qrAccNo.replace(/\s+/g, "");
        
        const cleanEnteredName = removeAccents(enteredAccName).toUpperCase().trim();
        const cleanQrName = removeAccents(qrAccName).toUpperCase().trim();
        
        if (cleanEnteredAcc !== cleanQrAcc) {
            return { 
                valid: false, 
                msg: appState.language === 'vi'
                    ? `Số tài khoản trong QR (${qrAccNo}) không khớp với số đã nhập (${enteredAccNo})!`
                    : `Account in QR (${qrAccNo}) does not match entered (${enteredAccNo})!`
            };
        }
        
        if (cleanEnteredName !== cleanQrName && !cleanQrName.includes(cleanEnteredName) && !cleanEnteredName.includes(cleanQrName)) {
            return { 
                valid: false, 
                msg: appState.language === 'vi'
                    ? `Tên chủ tài khoản trong QR (${qrAccName}) không khớp với tên đã nhập (${enteredAccName})!`
                    : `Holder in QR (${qrAccName}) does not match entered (${enteredAccName})!`
            };
        }
        
        return { 
            valid: true, 
            msg: appState.language === 'vi' ? "Thông tin tài khoản trùng khớp!" : "Bank details match!" 
        };
    }
    
    const cleanEnteredAcc = enteredAccNo.replace(/\s+/g, "");
    if (cleanEnteredAcc && text.replace(/\s+/g, "").includes(cleanEnteredAcc)) {
        return { 
            valid: true, 
            msg: appState.language === 'vi' ? "Mã QR chứa số tài khoản khớp." : "QR code contains matching account number." 
        };
    }
    
    return { 
        valid: false, 
        msg: appState.language === 'vi' 
            ? "Mã QR không chứa số tài khoản đã nhập!" 
            : "QR code does not contain entered account number!" 
    };
}

// HELPER FUNCTIONS FOR UN-SAVED WARNINGS & VOICE GUIDANCE
function hasUnsavedSettings() {
    const selectBankEl = document.getElementById('selectBank');
    if (!selectBankEl) return false;

    const bankSelect = selectBankEl.value;
    let currentBank = bankSelect;
    if (bankSelect === 'other') {
        currentBank = document.getElementById('inputCustomBank').value.trim();
    }
    const currentAccountNo = document.getElementById('inputAccountNo').value.trim();
    const currentAccountName = document.getElementById('inputAccountName').value.trim();
    const currentDefaultAmount = document.getElementById('inputDefaultAmount').value.trim();
    const currentGeminiKey = document.getElementById('inputGeminiKey').value.trim();
    const currentCurrency = document.getElementById('selectCurrency').value;

    const savedBank = appState.payment.bank;
    const savedAccountNo = appState.payment.accountNo;
    const savedAccountName = appState.payment.accountName;
    const savedDefaultAmount = appState.payment.defaultAmount;
    const savedGeminiKey = appState.ai.geminiKey || "";
    const savedCurrency = appState.payment.currency || "VND";
    const savedQrCode = appState.payment.qrCode || "";

    if (currentBank !== savedBank) return true;
    if (currentAccountNo !== savedAccountNo) return true;
    if (currentAccountName !== savedAccountName) return true;
    if (currentDefaultAmount !== savedDefaultAmount) return true;
    if (currentGeminiKey !== savedGeminiKey) return true;
    if (currentCurrency !== savedCurrency) return true;
    if (tempQrBase64 !== savedQrCode) return true;

    return false;
}

function savePaymentSettingsSilently() {
    const bankSelect = document.getElementById('selectBank').value;
    let bank = bankSelect;
    if (bankSelect === 'other') {
        const customBankVal = document.getElementById('inputCustomBank').value.trim();
        if (!customBankVal) {
            alert(appState.language === 'vi' 
                ? "Vui lòng nhập tên ngân hàng của bạn!" 
                : "Please enter your bank name!");
            return false;
        }
        bank = customBankVal;
    }

    const accountNo = document.getElementById('inputAccountNo').value.trim();
    const accountName = document.getElementById('inputAccountName').value.trim();
    const defaultAmount = document.getElementById('inputDefaultAmount').value.trim() || "50000";
    const currency = document.getElementById('selectCurrency').value;

    if (!accountNo || !accountName) {
        alert(appState.language === 'vi' 
            ? "Vui lòng nhập đầy đủ Số tài khoản và Chủ tài khoản!" 
            : "Please fill in Account Number and Holder Name!");
        return false;
    }

    if (!tempQrBase64) {
        alert(appState.language === 'vi' 
            ? "Cảnh báo: Bạn chưa tải lên mã QR hợp lệ khớp với thông tin đã nhập!" 
            : "Warning: Please upload a valid QR code image!");
        return false;
    }

    const updatedPayment = {
        bank,
        accountNo,
        accountName,
        defaultAmount,
        currency,
        qrCode: tempQrBase64
    };

    const theme = document.getElementById('selectTheme').value;
    const updatedAppearance = {
        ...appState.appearance,
        theme
    };

    const geminiKey = document.getElementById('inputGeminiKey').value.trim();

    saveState('payment', updatedPayment);
    saveState('appearance', updatedAppearance);
    saveState('ai', { geminiKey });
    applyTheme(theme);
    return true;
}

function playPaymentGuidance() {
    unlockAudio();
    stopAllPlayback();

    const lang = appState.language;
    const amountVal = document.getElementById('fareAmount').value.trim();
    const currency = appState.payment.currency || "VND";
    const currencyName = TRANSLATIONS[lang][`currency_${currency.toLowerCase()}`] || "";

    const template = TRANSLATIONS[lang]['payment_guidance_template'];
    const parsedText = template
        .replace(/{amount}/g, amountVal)
        .replace(/{currency_name}/g, currencyName);

    const guidanceBtn = document.getElementById('btnPlayPaymentGuidance');
    const paymentView = document.getElementById('payment-view');

    if (guidanceBtn) {
        guidanceBtn.classList.add('btn-active');
    }
    if (paymentView) {
        paymentView.classList.add('playing-audio');
    }

    playCloudSpeech(
        parsedText,
        lang,
        () => {
            console.log("Playing payment guidance...");
        },
        () => {
            if (guidanceBtn) {
                guidanceBtn.classList.remove('btn-active');
            }
            if (paymentView) {
                paymentView.classList.remove('playing-audio');
            }
            stopAllPlayback();
        }
    );
}

// FORM SUBMISSIONS
function setupForms() {
    const rangeVol = document.getElementById('rangeVolume');
    const rangeSpd = document.getElementById('rangeSpeed');
    
    rangeVol.addEventListener('input', (e) => {
        document.getElementById('valVolume').textContent = `${Math.round(e.target.value * 100)}%`;
    });
    rangeSpd.addEventListener('input', (e) => {
        document.getElementById('valSpeed').textContent = `${parseFloat(e.target.value).toFixed(1)}x`;
    });

    // Select bank change listener to toggle custom bank input
    const selectBank = document.getElementById('selectBank');
    const customBankGroup = document.getElementById('customBankGroup');
    if (selectBank && customBankGroup) {
        selectBank.addEventListener('change', () => {
            if (selectBank.value === 'other') {
                customBankGroup.classList.remove('hidden');
            } else {
                customBankGroup.classList.add('hidden');
            }
        });
    }

    // User Form Submit
    document.getElementById('userForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const updatedDriver = {
            name: document.getElementById('inputDriverName').value.trim(),
            dob: document.getElementById('inputDriverDOB').value,
            gender: document.getElementById('selectGender').value,
            license: document.getElementById('inputLicenseInfo').value.trim(),
            avatar: appState.driver.avatar
        };
        saveState('driver', updatedDriver);
        alert(appState.language === 'vi' ? "Đã lưu thông tin tài xế!" : "Driver info saved!");
    });

    // Car Form Submit
    document.getElementById('carForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const updatedCar = {
            plate: document.getElementById('inputCarPlate').value.trim(),
            model: document.getElementById('inputCarModel').value.trim(),
            seats: document.getElementById('inputCarSeats').value,
            color: document.getElementById('inputCarColor').value.trim(),
            registry: document.getElementById('inputCarRegistry').value,
            image: appState.car.image
        };
        saveState('car', updatedCar);
        alert(appState.language === 'vi' ? "Đã lưu thông tin xe!" : "Car info saved!");
    });

    // Sound Form Submit
    document.getElementById('soundForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const lang = appState.language;
        const updatedSound = {
            ...appState.sound,
            chime: document.getElementById('selectChime').value,
            volume: rangeVol.value,
            speed: rangeSpd.value,
            voice: "cloud_default"
        };
        
        updatedSound[`welcome_${lang}`] = document.getElementById('textWelcome').value.trim();
        updatedSound[`intro_${lang}`] = document.getElementById('textIntro').value.trim();
        updatedSound[`farewell_${lang}`] = document.getElementById('textFarewell').value.trim();
        
        saveState('sound', updatedSound);
        
        // Asynchronously prefetch Google TTS voice chunks and save to local browser cache
        preloadAnnouncementsTTS(updatedSound);
        
        alert(appState.language === 'vi' 
            ? "Đã lưu cấu hình và đang tạo giọng đọc lưu vào bộ nhớ đệm local!" 
            : "Configuration saved and generating voice cache in background!");
    });

    // Save All Settings (General Settings tab)
    document.getElementById('btnSavePaymentConfig').addEventListener('click', () => {
        if (savePaymentSettingsSilently()) {
            alert(appState.language === 'vi' 
                ? "Đã lưu toàn bộ cài đặt thành công!" 
                : "All settings saved successfully!");
        }
    });
}

// CLOUD AI SPEECH SYNTHESIS ENGINE
function unlockAudio() {
    if (!activeCloudAudio) {
        activeCloudAudio = new Audio();
    }
    activeCloudAudio.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
    activeCloudAudio.play().catch(e => {
        // Ignore error
    });
}

function playCloudSpeech(text, lang, onStart, onEnd) {
    const voicePref = appState.sound.voice || "cloud_default";
    
    let chunks = text.split(/(?<=[.!?])\s+/);
    if (!chunks || chunks.length === 0) {
        if (onEnd) onEnd();
        return;
    }
    
    chunks = chunks.map(c => c.trim()).filter(c => c.length > 0);
    if (chunks.length === 0) {
        if (onEnd) onEnd();
        return;
    }

    let currentIndex = 0;
    if (onStart) onStart();

    if (voicePref.startsWith('local_')) {
        // Direct local synthesis chunk play
        function playNextLocal() {
            if (currentIndex >= chunks.length) {
                if (onEnd) onEnd();
                return;
            }
            speakLocalSingleChunk(chunks[currentIndex], lang, () => {
                currentIndex++;
                playNextLocal();
            });
        }
        playNextLocal();
        return;
    }

    if (!activeCloudAudio) {
        activeCloudAudio = new Audio();
    }

    function playNext() {
        if (currentIndex >= chunks.length) {
            if (onEnd) onEnd();
            return;
        }

        const chunk = chunks[currentIndex];
        const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang === 'vi' ? 'vi' : 'en'}&client=tw-ob&q=${encodeURIComponent(chunk)}`;
        
        // Reset all listeners to avoid cross-chunk leaks
        activeCloudAudio.onended = null;
        activeCloudAudio.onerror = null;
        activeCloudAudio.onloadedmetadata = null;
        activeCloudAudio.onplay = null;
        activeCloudAudio.onplaying = null;

        activeCloudAudio.src = ttsUrl;
        activeCloudAudio.volume = parseFloat(appState.sound.volume);

        // Adjust cloud voice speed/pitch based on selected voice option & speed slider
        const userSpeed = parseFloat(appState.sound.speed) || 1.0;
        let voiceRate = 1.0;
        let preserves = true;
        if (voicePref === 'cloud_female_warm') {
            voiceRate = 0.90;
            preserves = false;
        } else if (voicePref === 'cloud_male') {
            voiceRate = 0.72; // Pitch shift down by a factor of 0.72 to sound like a deep male voice
            preserves = false;
        }

        const applyPlaybackRate = () => {
            try {
                activeCloudAudio.preservesPitch = preserves;
                activeCloudAudio.webkitPreservesPitch = preserves;
                activeCloudAudio.mozPreservesPitch = preserves;
                activeCloudAudio.playbackRate = voiceRate * userSpeed;
            } catch (err) {
                console.warn("Failed to apply preservesPitch or playbackRate in listener:", err);
            }
        };

        // Re-apply properties on metadata load, play, and playing to bypass browser resets
        activeCloudAudio.onloadedmetadata = applyPlaybackRate;
        activeCloudAudio.onplay = applyPlaybackRate;
        activeCloudAudio.onplaying = applyPlaybackRate;

        // Apply immediately
        applyPlaybackRate();

        activeCloudAudio.onended = () => {
            activeCloudAudio.onloadedmetadata = null;
            activeCloudAudio.onplay = null;
            activeCloudAudio.onplaying = null;
            currentIndex++;
            playNext();
        };

        activeCloudAudio.onerror = (e) => {
            activeCloudAudio.onloadedmetadata = null;
            activeCloudAudio.onplay = null;
            activeCloudAudio.onplaying = null;
            console.error("Cloud TTS chunk play error, falling back to local speech synthesis:", e);
            speakLocalSingleChunk(chunk, lang, () => {
                currentIndex++;
                playNext();
            });
        };

        activeCloudAudio.play().catch(err => {
            activeCloudAudio.onloadedmetadata = null;
            activeCloudAudio.onplay = null;
            activeCloudAudio.onplaying = null;
            console.error("Cloud TTS play catch error, falling back to local speech synthesis:", err);
            speakLocalSingleChunk(chunk, lang, () => {
                currentIndex++;
                playNext();
            });
        });
    }

    playNext();
}

function speakLocalSingleChunk(text, lang, onEnd) {
    if (!('speechSynthesis' in window)) {
        if (onEnd) onEnd();
        return;
    }
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'vi' ? 'vi-VN' : 'en-US';
    utterance.volume = parseFloat(appState.sound.volume);
    utterance.rate = parseFloat(appState.sound.speed);
    
    // Choose local voice based on appState.sound.voice
    const voices = window.speechSynthesis.getVoices();
    const voicePref = appState.sound.voice || "cloud_default";
    
    let selectedVoice = null;
    const targetLang = lang === 'vi' ? 'vi' : 'en';
    
    // Filter voices matching language
    const langVoices = voices.filter(v => v.lang.toLowerCase().startsWith(targetLang));
    
    if (voicePref === 'cloud_male' || voicePref === 'local_male') {
        selectedVoice = langVoices.find(v => v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('david') || v.name.toLowerCase().includes('nam') || v.name.toLowerCase().includes('natural'));
        if (!selectedVoice && langVoices.length > 1) {
            selectedVoice = langVoices[1];
        }
    } else {
        // default and cloud_female_warm fallback to female local voice
        selectedVoice = langVoices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('zira') || v.name.toLowerCase().includes('an') || v.name.toLowerCase().includes('natural'));
        if (!selectedVoice && langVoices.length > 0) {
            selectedVoice = langVoices[0];
        }
    }
    
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    } else if (langVoices.length > 0) {
        utterance.voice = langVoices[0];
    }
    
    utterance.onend = () => {
        if (onEnd) onEnd();
    };
    utterance.onerror = (e) => {
        console.error("SpeechSynthesis error:", e);
        if (onEnd) onEnd();
    };
    
    window.speechSynthesis.speak(utterance);
}

async function preloadAnnouncementsTTS(soundState) {
    const driverName = appState.driver.name || "Tài xế";
    const carModel = appState.car.model || "xe";
    const carPlate = appState.car.plate || "biển số";
    
    const urls = [];
    const types = ['welcome', 'intro', 'farewell'];
    const languages = ['vi', 'en'];
    
    types.forEach(type => {
        languages.forEach(l => {
            const rawScript = soundState[`${type}_${l}`];
            if (!rawScript) return;
            
            const parsedScript = rawScript
                .replace(/{name}/g, driverName)
                .replace(/{model}/g, carModel)
                .replace(/{plate}/g, carPlate);
                
            let chunks = parsedScript.split(/(?<=[.!?])\s+/);
            if (chunks && chunks.length > 0) {
                chunks = chunks.map(c => c.trim()).filter(c => c.length > 0);
                chunks.forEach(chunk => {
                    const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${l === 'vi' ? 'vi' : 'en'}&client=tw-ob&q=${encodeURIComponent(chunk)}`;
                    urls.push(ttsUrl);
                });
            }
        });
    });
    
    console.log(`[Offline Cache] Pre-fetching ${urls.length} TTS chunks...`);
    
    const fetchPromises = urls.map(url => {
        return fetch(url, { mode: 'no-cors' })
            .catch(err => console.warn("Failed to prefetch TTS chunk:", url, err));
    });
    
    try {
        await Promise.all(fetchPromises);
        console.log("[Offline Cache] Pre-fetching completed successfully.");
    } catch (e) {
        console.warn("[Offline Cache] Some prefetches failed:", e);
    }
}

// PROGRAMMATIC CHIME & SPEECH ENGINE
let activeChimeTimeout = null;
let activeChimeNodes = [];
let activeAudioChime = null;
let activeUtterance = null;

function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

function playChime(type, callback) {
    if (type === 'none') {
        callback();
        return;
    }

    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        activeChimeNodes = [];

        if (type === 'dingdong') {
            const osc1 = ctx.createOscillator();
            const gain1 = ctx.createGain();
            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(523.25, now);
            gain1.gain.setValueAtTime(0.4 * appState.sound.volume, now);
            gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
            osc1.connect(gain1);
            gain1.connect(ctx.destination);
            osc1.start(now);
            osc1.stop(now + 0.6);
            activeChimeNodes.push(osc1);

            const osc2 = ctx.createOscillator();
            const gain2 = ctx.createGain();
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(392.00, now + 0.4);
            gain2.gain.setValueAtTime(0, now);
            gain2.gain.setValueAtTime(0.4 * appState.sound.volume, now + 0.4);
            gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
            osc2.connect(gain2);
            gain2.connect(ctx.destination);
            osc2.start(now + 0.4);
            osc2.stop(now + 1.2);
            activeChimeNodes.push(osc2);

            activeChimeTimeout = setTimeout(callback, 1200);
        } 
        else if (type === 'beep') {
            const duration = 0.08;
            const gap = 0.08;
            for (let i = 0; i < 3; i++) {
                const time = now + i * (duration + gap);
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'square';
                osc.frequency.setValueAtTime(950, time);
                gain.gain.setValueAtTime(0.2 * appState.sound.volume, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(time);
                osc.stop(time + duration);
                activeChimeNodes.push(osc);
            }
            activeChimeTimeout = setTimeout(callback, 550);
        } 
        else if (type === 'bell') {
            const oscFund = ctx.createOscillator();
            const gainFund = ctx.createGain();
            oscFund.type = 'sine';
            oscFund.frequency.setValueAtTime(880, now);
            gainFund.gain.setValueAtTime(0.3 * appState.sound.volume, now);
            gainFund.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
            oscFund.connect(gainFund);
            gainFund.connect(ctx.destination);
            oscFund.start(now);
            oscFund.stop(now + 1.5);
            activeChimeNodes.push(oscFund);
            
            const oscOver = ctx.createOscillator();
            const gainOver = ctx.createGain();
            oscOver.type = 'sine';
            oscOver.frequency.setValueAtTime(1320, now);
            gainOver.gain.setValueAtTime(0.12 * appState.sound.volume, now);
            gainOver.gain.exponentialRampToValueAtTime(0.001, now + 1.0);
            oscOver.connect(gainOver);
            gainOver.connect(ctx.destination);
            oscOver.start(now);
            oscOver.stop(now + 1.0);
            activeChimeNodes.push(oscOver);

            activeChimeTimeout = setTimeout(callback, 1400);
        }
        else if (type === 'double_beep') {
            const duration = 0.07;
            const gap = 0.07;
            for (let i = 0; i < 2; i++) {
                const time = now + i * (duration + gap);
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(880, time);
                gain.gain.setValueAtTime(0.2 * appState.sound.volume, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(time);
                osc.stop(time + duration);
                activeChimeNodes.push(osc);
            }
            activeChimeTimeout = setTimeout(callback, 300);
        }
        else if (type === 'success_chime') {
            const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
            const noteDuration = 0.12;
            const overlap = 0.05;
            notes.forEach((freq, idx) => {
                const time = now + idx * (noteDuration - overlap);
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, time);
                gain.gain.setValueAtTime(0, time);
                gain.gain.linearRampToValueAtTime(0.2 * appState.sound.volume, time + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.001, time + 0.4);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(time);
                osc.stop(time + 0.4);
                activeChimeNodes.push(osc);
            });
            activeChimeTimeout = setTimeout(callback, 800);
        }
        else if (type === 'elevator_ding') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(987.77, now); // B5
            gain.gain.setValueAtTime(0.35 * appState.sound.volume, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 1.2);
            activeChimeNodes.push(osc);
            
            activeChimeTimeout = setTimeout(callback, 1000);
        }
        else if (type === 'subtle_wobble') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(440, now);
            osc.frequency.exponentialRampToValueAtTime(880, now + 0.3);
            gain.gain.setValueAtTime(0.18 * appState.sound.volume, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.4);
            activeChimeNodes.push(osc);
            
            activeChimeTimeout = setTimeout(callback, 500);
        }
        else if (type === 'vn_airline') {
            if (activeAudioChime) {
                try { activeAudioChime.pause(); } catch(e) {}
            }
            const audio = new Audio('vn_airline.mp3');
            audio.volume = appState.sound.volume;
            activeAudioChime = audio;
            audio.onended = () => {
                activeAudioChime = null;
                callback();
            };
            audio.onerror = (e) => {
                console.error("Failed to play VN airline chime:", e);
                activeAudioChime = null;
                callback();
            };
            audio.play().catch(err => {
                console.error("Playback failed", err);
                activeAudioChime = null;
                callback();
            });
        }
    } catch (e) {
        console.error("Audio Context synthesis error:", e);
        callback();
    }
}

function stopAllPlayback() {
    if (activeAudioChime) {
        try {
            activeAudioChime.pause();
            activeAudioChime.currentTime = 0;
        } catch(e) {}
        activeAudioChime = null;
    }
    if (activeChimeTimeout) {
        clearTimeout(activeChimeTimeout);
        activeChimeTimeout = null;
    }
    if (activeChimeNodes && activeChimeNodes.length > 0) {
        activeChimeNodes.forEach(node => {
            try { node.stop(); } catch(e) {}
        });
        activeChimeNodes = [];
    }
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    if (activeCloudAudio) {
        try { 
            activeCloudAudio.onended = null;
            activeCloudAudio.onerror = null;
            activeCloudAudio.pause(); 
            activeCloudAudio.src = "";
        } catch(e) {}
    }
    const aiVisualizer = document.getElementById('aiVisualizer');
    if (aiVisualizer) {
        aiVisualizer.classList.remove('playing-audio');
        const bars = aiVisualizer.querySelectorAll('.wave-bar');
        bars.forEach(bar => bar.style.animation = 'none');
    }

    const dashboard = document.getElementById('dashboard');
    dashboard.classList.remove('playing-audio', 'playing-welcome', 'playing-intro', 'playing-farewell');
    
    const tacticalButtons = document.querySelectorAll('.tactical-btn');
    tacticalButtons.forEach(btn => btn.classList.remove('btn-active'));

    const guidanceBtn = document.getElementById('btnPlayPaymentGuidance');
    if (guidanceBtn) {
        guidanceBtn.classList.remove('btn-active');
    }
    const paymentView = document.getElementById('payment-view');
    if (paymentView) {
        paymentView.classList.remove('playing-audio');
    }

    document.getElementById('statusIcon').className = 'fa-solid fa-volume-high';
    document.getElementById('statusText').textContent = appState.language === 'vi' ? 'Sẵn sàng' : 'Ready';
    
    const stopBtn = document.getElementById('btnStopPlayback');
    if (stopBtn) {
        stopBtn.disabled = true;
        stopBtn.classList.remove('active');
    }
}

// SETUP AUDIO PLAYER
function setupAudioControllers() {
    const dashboard = document.getElementById('dashboard');
    const statusIcon = document.getElementById('statusIcon');
    const statusText = document.getElementById('statusText');
    const stopBtn = document.getElementById('btnStopPlayback');
    const tacticalButtons = document.querySelectorAll('.tactical-btn');

    if (stopBtn) {
        stopBtn.addEventListener('click', stopAllPlayback);
    }

    // Play welcome / intro / farewell announcements
    tacticalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            unlockAudio();
            stopAllPlayback();

            const soundType = btn.getAttribute('data-sound');
            const lang = appState.language;
            let rawScript = appState.sound[`${soundType}_${lang}`];
            
            // Dynamic variable placeholder replacement
            let parsedScript = rawScript
                .replace(/{name}/g, appState.driver.name || "Tài xế")
                .replace(/{model}/g, appState.car.model || "xe")
                .replace(/{plate}/g, appState.car.plate || "biển số");

            // UI updates
            btn.classList.add('btn-active');
            if (stopBtn) {
                stopBtn.disabled = false;
                stopBtn.classList.add('active');
            }

            dashboard.classList.add('playing-audio', `playing-${soundType}`);
            statusText.textContent = lang === 'vi' ? "Đang phát..." : "Playing...";

            if (soundType === 'welcome') {
                statusIcon.className = 'fa-solid fa-door-open';
            } else if (soundType === 'intro') {
                statusIcon.className = 'fa-solid fa-id-badge';
            } else if (soundType === 'farewell') {
                statusIcon.className = 'fa-solid fa-hand-holding-hand';
            }

            // Play Chime
            playChime(appState.sound.chime, () => {
                playCloudSpeech(
                    parsedScript,
                    lang,
                    () => {
                        console.log("Playing Cloud TTS announcement...");
                    },
                    () => {
                        stopAllPlayback();
                    }
                );
            });
        });
    });

    // Test Voice button
    document.getElementById('btnTestVoice').addEventListener('click', () => {
        unlockAudio();
        stopAllPlayback();
        
        const lang = appState.language;
        const testText = lang === 'vi' 
            ? "Xin kính chào quý khách. Đây là giọng phát thử nghiệm trên ứng dụng taxi sau." 
            : "Welcome. This is a test voice on the Taxi Sounds application.";
            
        playChime(appState.sound.chime, () => {
            playCloudSpeech(
                testText,
                lang,
                () => {
                    console.log("Playing test voice cloud TTS...");
                },
                () => {
                    stopAllPlayback();
                }
            );
        });
    });

    // Cloud AI speech generation and playback
    const btnGenerateAiSpeech = document.getElementById('btnGenerateAiSpeech');
    if (btnGenerateAiSpeech) {
        btnGenerateAiSpeech.addEventListener('click', async () => {
            unlockAudio();
            const promptInput = document.getElementById('inputAiPrompt');
            const prompt = promptInput.value.trim();
            if (!prompt) {
                alert(appState.language === 'vi' ? "Vui lòng nhập yêu cầu cho AI!" : "Please enter a prompt for the AI!");
                return;
            }

            const aiResultCard = document.getElementById('aiResultCard');
            const aiGeneratedText = document.getElementById('aiGeneratedText');
            const aiVisualizer = document.getElementById('aiVisualizer');

            // Show loading state
            btnGenerateAiSpeech.disabled = true;
            const originalBtnHtml = btnGenerateAiSpeech.innerHTML;
            btnGenerateAiSpeech.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ' + (appState.language === 'vi' ? "Đang xử lý..." : "Generating...");

            aiResultCard.classList.remove('hidden');
            aiGeneratedText.textContent = appState.language === 'vi' ? "Đang kết nối Tác nhân AI Cloud..." : "Connecting to Cloud AI Agent...";
            aiVisualizer.classList.add('hidden');

            let generatedScript = "";
            const apiKey = appState.ai.geminiKey || "";
            const lang = document.getElementById('selectAiLang').value;

            // Stop any playing sound
            stopAllPlayback();

            try {
                if (apiKey) {
                    // Call Gemini API Cloud
                    const systemInstruction = `You are a professional, helpful, and polite taxi voice announcement generator named "taxi_sound". Write a short, friendly, and natural voice announcement for taxi passengers based on the driver's prompt. Integrate the driver name (${appState.driver.name}), vehicle model (${appState.car.model}), and plate (${appState.car.plate}) if appropriate. Keep the announcement short, friendly, and under 150 characters. Write the announcement in ${lang === 'vi' ? 'Vietnamese' : 'English'}. Return ONLY the announcement text itself. Do not include any tags, prefix, quotes, explanation, or formatting.`;

                    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            contents: [{
                                parts: [{
                                    text: `System Instruction: ${systemInstruction}\nDriver Prompt: ${prompt}`
                                }]
                            }]
                        })
                    });

                    if (!response.ok) {
                        throw new Error(`Gemini API Error: Status ${response.status}`);
                    }

                    const resData = await response.json();
                    if (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
                        generatedScript = resData.candidates[0].content.parts[0].text.trim();
                    } else {
                        throw new Error("Invalid response format from Gemini");
                    }
                } else {
                    // Fallback local mock script generator
                    const driverName = appState.driver.name || "Nguyễn Văn Tài";
                    const carModel = appState.car.model || "Toyota Vios";
                    const carPlate = appState.car.plate || "30A-999.99";
                    
                    if (lang === 'vi') {
                        generatedScript = `Thông báo từ taxi_sound: Kính chào quý khách. Yêu cầu phát: ${prompt}. Tôi là tài xế ${driverName}, phục vụ trên xe ${carModel} biển số ${carPlate}. Chúc chuyến đi vui vẻ.`;
                    } else {
                        generatedScript = `Notification from taxi_sound: Welcome passengers. Request: ${prompt}. I am driver ${driverName}, serving on ${carModel} with license plate ${carPlate}. Wish you a nice trip.`;
                    }
                    console.log("Using template fallback for AI Agent script generation.");
                }

                // Clean script quotes/formatting if any
                generatedScript = generatedScript.replace(/^["']|["']$/g, '').trim();
                aiGeneratedText.textContent = generatedScript;

                // Play Audio via Cloud Speech
                playCloudSpeech(
                    generatedScript,
                    lang,
                    () => {
                        aiVisualizer.classList.remove('hidden');
                        aiVisualizer.classList.add('playing-audio');
                        const bars = aiVisualizer.querySelectorAll('.wave-bar');
                        bars.forEach(bar => bar.style.animation = 'eqAnim 0.8s infinite ease-in-out alternate');
                    },
                    () => {
                        aiVisualizer.classList.remove('playing-audio');
                        const bars = aiVisualizer.querySelectorAll('.wave-bar');
                        bars.forEach(bar => bar.style.animation = 'none');
                    }
                );

            } catch (err) {
                console.error("AI Generation error:", err);
                aiGeneratedText.textContent = appState.language === 'vi'
                    ? "Lỗi: Không thể kết nối tác nhân AI Cloud. Vui lòng kiểm tra lại kết nối mạng hoặc API Key trong Cài đặt!"
                    : "Error: Failed to connect to Cloud AI Agent. Please check network connection or API Key in Settings!";
            } finally {
                btnGenerateAiSpeech.disabled = false;
                btnGenerateAiSpeech.innerHTML = originalBtnHtml;
            }
        });
    }

    const btnPlayPaymentGuidance = document.getElementById('btnPlayPaymentGuidance');
    if (btnPlayPaymentGuidance) {
        btnPlayPaymentGuidance.addEventListener('click', playPaymentGuidance);
    }
}

// SIMULATED PAYMENT KEYPAD LOGIC
function setupKeypad() {
    const fareAmountInput = document.getElementById('fareAmount');
    const keypadButtons = document.querySelectorAll('.keypad-btn');
    
    keypadButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            let currentVal = fareAmountInput.value.replace(/\D/g, "");
            const action = btn.getAttribute('data-action');
            const digit = btn.textContent.trim();

            if (action === 'clear') {
                if (currentVal.length > 1) {
                    currentVal = currentVal.substring(0, currentVal.length - 1);
                } else {
                    currentVal = "0";
                }
            } else if (digit === '000') {
                if (currentVal !== "0" && currentVal !== "") {
                    currentVal += "000";
                }
            } else {
                if (currentVal === "0") {
                    currentVal = digit;
                } else {
                    currentVal += digit;
                }
            }

            if (parseInt(currentVal, 10) > 10000000) {
                currentVal = "10000000";
            }

            fareAmountInput.value = formatCurrency(currentVal);
        });
    });
}

// SPOTIFY COMPANION LOGIC
function setupSpotifyCompanion() {
    const spotifyThemeStage = document.getElementById('spotifyThemeStage');
    const spotifyArtistStage = document.getElementById('spotifyArtistStage');
    const spotifyRecommendStage = document.getElementById('spotifyRecommendStage');
    const spotifySelectedThemeText = document.getElementById('spotifySelectedThemeText');
    const spotifySelectedArtistText = document.getElementById('spotifySelectedArtistText');
    const spotifyArtistsList = document.getElementById('spotifyArtistsList');
    const spotifySongsList = document.getElementById('spotifySongsList');
    const btnBackToThemes = document.getElementById('btnBackToThemes');
    const btnBackToArtists = document.getElementById('btnBackToArtists');
    const btnSubmitCustomTheme = document.getElementById('btnSubmitCustomTheme');
    const inputCustomMusicTheme = document.getElementById('inputCustomMusicTheme');
    const btnSuggestOtherArtists = document.getElementById('btnSuggestOtherArtists');
    const btnSuggestOtherSongs = document.getElementById('btnSuggestOtherSongs');

    const btnLaunchSpotify = document.getElementById('btnLaunchSpotify');
    const aiSpotifyTabContent = document.getElementById('aiSpotifyTabContent');
    if (btnLaunchSpotify && aiSpotifyTabContent) {
        btnLaunchSpotify.addEventListener('click', () => {
            aiSpotifyTabContent.classList.toggle('hidden');
            if (!aiSpotifyTabContent.classList.contains('hidden')) {
                aiSpotifyTabContent.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    let currentThemeKey = "";
    let currentThemeName = "";
    let currentThemeData = []; // Array of { artist: "...", songs: [...] }
    let selectedArtistName = "";

    // Default static songs mapping grouped by Theme -> Artist -> Songs
    const defaultSongs = {
        lofi: {
            "14 Casper": [
                { title: "bao tien mot mo binh yen", reason: "Một chút bình yên, mộc mạc lắng đọng", spotifyId: "6g5M1h4qL6Qy5jTjX5JmJ6" },
                { title: "khong the say", reason: "Giai điệu thư thả trôi dạt", spotifyId: "" },
                { title: "tinh yeu mau xanh", reason: "Giai điệu nhẹ nhàng trong xanh", spotifyId: "" }
            ],
            "ERIK": [
                { title: "diu dang em den lofi", reason: "Giai điệu lofi ngọt ngào, thư giãn", spotifyId: "" },
                { title: "chay ve khoc voi em lofi", reason: "Bản phối lofi êm ái, đầy cảm xúc", spotifyId: "" },
                { title: "dau nhat la lang im lofi", reason: "Bản ballad phối lofi êm tai", spotifyId: "" }
            ],
            "Hoang Thuy Linh": [
                { title: "tu phu lofi", reason: "Sự kết hợp độc đáo giữa âm hưởng dân gian và lofi", spotifyId: "" },
                { title: "see tinh lofi", reason: "Giai điệu chill dễ thương", spotifyId: "" },
                { title: "bo xi bo lofi", reason: "Beat lofi bắt tai, nhẹ nhàng", spotifyId: "" }
            ],
            "Vu": [
                { title: "dong kiem em", reason: "Giọng hát mộc mạc kết hợp lofi nhẹ nhàng", spotifyId: "" },
                { title: "buoc qua nhau", reason: "Bản nhạc buồn da diết phù hợp đi xe đêm", spotifyId: "" },
                { title: "la lung lofi", reason: "Giai điệu quen thuộc đầy ấm áp", spotifyId: "" }
            ]
        },
        acoustic: {
            "Thuy Chi": [
                { title: "xe dap acoustic", reason: "Guitar nhẹ nhàng, gợi nhớ kỷ niệm học trò", spotifyId: "" },
                { title: "giu em di acoustic", reason: "Bản acoustic sâu lắng và truyền cảm", spotifyId: "" },
                { title: "giac mo trua", reason: "Giai điệu êm dịu thanh bình", spotifyId: "" }
            ],
            "Vu": [
                { title: "la lung", reason: "Giọng ca ấm áp cùng guitar mộc mạc", spotifyId: "" },
                { title: "mua dong chua qua", reason: "Bản acoustic lắng đọng nhiều tâm trạng", spotifyId: "" },
                { title: "hanh tinh song song", reason: "Không gian âm nhạc mộc mạc và rộng lớn", spotifyId: "" }
            ],
            "JustaTee": [
                { title: "thang dien acoustic", reason: "Bản acoustic cực kỳ dễ thương và ngọt ngào", spotifyId: "" },
                { title: "da lo yeu em nhieu acoustic", reason: "Giai điệu R&B nhẹ nhàng trên nền guitar mộc", spotifyId: "" },
                { title: "ve nha di thoi", reason: "Giai điệu ấm cúng, thư giãn hướng về gia đình", spotifyId: "" }
            ],
            "Ha Anh Tuan": [
                { title: "thang tu la loi noi doi cua em", reason: "Bản acoustic ballad lãng mạn đầy cảm xúc", spotifyId: "" },
                { title: "con mua tinh yeu", reason: "Bài hát song ca ngọt ngào, nhẹ nhàng", spotifyId: "" },
                { title: "thuyen va bien", reason: "Giai điệu mộc mạc, trữ tình sâu lắng", spotifyId: "" }
            ]
        },
        pop: {
            "Phan Manh Quynh": [
                { title: "sau loi tu khuoc", reason: "Nhạc ballad đầy chiều sâu tâm trạng cực hot", spotifyId: "" },
                { title: "co vi nhat", reason: "Giai điệu nhẹ nhàng, sâu sắc về tình cảm gia đình", spotifyId: "" },
                { title: "ngay chua giong bao", reason: "Bản pop mang màu sắc huyền bí và lôi cuốn", spotifyId: "" }
            ],
            "Den": [
                { title: "luon yeu doi", reason: "Giai điệu vui vẻ, tràn đầy năng lượng tích cực", spotifyId: "" },
                { title: "mang tien ve cho me", reason: "Lời rap sâu sắc, ý nghĩa trên nền nhạc pop êm dịu", spotifyId: "" },
                { title: "loi nho", reason: "Giai điệu chill, dễ nghe và dễ đồng cảm", spotifyId: "" }
            ],
            "Hoang Dung": [
                { title: "nang tho", reason: "Bản pop ballad lãng mạn, êm ái", spotifyId: "" },
                { title: "yeu em vao ngay nang", reason: "Giai điệu tươi vui, nhẹ nhàng tràn đầy sức sống", spotifyId: "" },
                { title: "thoi quen", reason: "Bản nhạc nhẹ nhàng, tâm trạng dễ nghe", spotifyId: "" }
            ],
            "Son Tung M-TP": [
                { title: "chung ta cua tuong lai", reason: "Bản pop lãng mạn, giai điệu bắt tai thu hút", spotifyId: "" },
                { title: "muon roi ma sao con", reason: "Giai điệu pop R&B tươi vui năng động", spotifyId: "" },
                { title: "noi nay co anh", reason: "Ca khúc ngọt ngào lãng mạn quen thuộc", spotifyId: "" }
            ]
        },
        classical: {
            "Claude Debussy": [
                { title: "Clair de Lune", reason: "Nhạc cổ điển piano cực kỳ thư giãn và sang trọng", spotifyId: "" },
                { title: "Arabesque No. 1", reason: "Giai điệu trôi chảy, thanh tao", spotifyId: "" },
                { title: "Reverie", reason: "Bản nhạc mơ mộng êm ái", spotifyId: "" }
            ],
            "Johann Pachelbel": [
                { title: "Canon in D", reason: "Giai điệu quen thuộc, dịu dàng giảm căng thẳng", spotifyId: "" },
                { title: "Chaconne in F minor", reason: "Bản nhạc organ cổ điển sâu lắng", spotifyId: "" }
            ],
            "Yiruma": [
                { title: "River Flows in You", reason: "Bản piano hiện đại trong trẻo dễ chịu", spotifyId: "" },
                { title: "Kiss the Rain", reason: "Bản piano lãng mạn, êm dịu phù hợp trời mưa", spotifyId: "" },
                { title: "May Be", reason: "Giai điệu nhẹ nhàng bay bổng", spotifyId: "" }
            ],
            "Ludwig van Beethoven": [
                { title: "Fur Elise", reason: "Bản piano ngắn cổ điển quen thuộc với mọi người", spotifyId: "" },
                { title: "Moonlight Sonata", reason: "Giai điệu piano cổ điển chiều sâu tâm trạng", spotifyId: "" }
            ]
        },
        remix: {
            "Jack-97": [
                { title: "Thien Ly Oi Remix", reason: "Bản remix sôi động khuấy động không khí chuyến đi", spotifyId: "" },
                { title: "Dom Dom Remix", reason: "Bản phối remix trẻ trung, tươi vui", spotifyId: "" },
                { title: "Hoa Hai Duong Remix", reason: "Beat remix chi tiết sống động", spotifyId: "" }
            ],
            "Ngo Lan Huong": [
                { title: "Tinh Dau Tinh Quoc Remix", reason: "Giai điệu vui tươi kết hợp beat remix hiện đại", spotifyId: "" },
                { title: "Anh muon di cung em Remix", reason: "Nhạc trẻ remix sôi nổi, hứng khởi", spotifyId: "" }
            ],
            "Tang Duy Tan": [
                { title: "Cat Doi Noi Sau Remix", reason: "Bài hit quốc dân bản phối remix cực kỳ bắt tai", spotifyId: "" },
                { title: "Ben Tren Tang Lau Remix", reason: "Giai điệu lôi cuốn, tạo sự phấn khởi", spotifyId: "" },
                { title: "Co Don Tren Sofa Remix", reason: "Bản remix hiện đại, trẻ trung cá tính", spotifyId: "" }
            ]
        },
        podcast: {
            "Vietcetera": [
                { title: "Have A Sip Podcast", reason: "Các buổi trò chuyện thú vị cùng khách mời đa lĩnh vực", spotifyId: "" },
                { title: "Vietnamese Dreamers", reason: "Những câu chuyện truyền cảm hứng từ người Việt thành công", spotifyId: "" }
            ],
            "Web5ngay": [
                { title: "Tam Su Kinh Doanh", reason: "Những bài học cuộc sống và kinh doanh thực tế, sâu sắc", spotifyId: "" },
                { title: "Bai Hoc Kinh Doanh", reason: "Chia sẻ ngắn gọn, dễ hiểu và tràn đầy tri thức bổ ích", spotifyId: "" }
            ],
            "Giang Oi": [
                { title: "Giang Oi Radio", reason: "Tâm sự nhẹ nhàng về quá trình trưởng thành và cuộc sống", spotifyId: "" },
                { title: "Lon Len Cung Giang", reason: "Những bài học bổ ích cho các bạn trẻ", spotifyId: "" }
            ]
        }
    };

    // Handle theme buttons click
    const themeButtons = document.querySelectorAll('.theme-pill-btn');
    themeButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const themeKey = btn.getAttribute('data-theme');
            const themeName = btn.textContent.trim();
            await selectTheme(themeKey, themeName);
        });
    });

    // Handle custom theme submit
    if (btnSubmitCustomTheme && inputCustomMusicTheme) {
        btnSubmitCustomTheme.addEventListener('click', async () => {
            const customTheme = inputCustomMusicTheme.value.trim();
            if (!customTheme) {
                alert(appState.language === 'vi' ? "Vui lòng nhập chủ đề âm nhạc của bạn!" : "Please enter your music theme!");
                return;
            }
            await selectTheme(customTheme, customTheme);
        });

        // Listen for enter key in input
        inputCustomMusicTheme.addEventListener('keypress', async (e) => {
            if (e.key === 'Enter') {
                const customTheme = inputCustomMusicTheme.value.trim();
                if (!customTheme) return;
                await selectTheme(customTheme, customTheme);
            }
        });
    }

    // Handle back buttons
    if (btnBackToThemes) {
        btnBackToThemes.addEventListener('click', () => {
            if (spotifyArtistStage) spotifyArtistStage.classList.add('hidden');
            spotifyThemeStage.classList.remove('hidden');
            if (inputCustomMusicTheme) inputCustomMusicTheme.value = "";
        });
    }

    if (btnBackToArtists) {
        btnBackToArtists.addEventListener('click', () => {
            spotifyRecommendStage.classList.add('hidden');
            if (spotifyArtistStage) spotifyArtistStage.classList.remove('hidden');
        });
    }

    // Suggest other handlers
    if (btnSuggestOtherArtists) {
        btnSuggestOtherArtists.addEventListener('click', () => {
            displayArtists();
        });
    }

    if (btnSuggestOtherSongs) {
        btnSuggestOtherSongs.addEventListener('click', () => {
            displaySongs();
        });
    }

    async function selectTheme(themeKey, displayTitle) {
        currentThemeKey = themeKey;
        currentThemeName = displayTitle;

        // Transitions: hide Stage 1 & 3, show Stage 2 (Artists)
        spotifyThemeStage.classList.add('hidden');
        spotifyRecommendStage.classList.add('hidden');
        if (spotifyArtistStage) {
            spotifyArtistStage.classList.remove('hidden');
        }
        spotifySelectedThemeText.textContent = `${appState.language === 'vi' ? 'Chủ đề' : 'Theme'}: ${displayTitle}`;
        
        // Show spinner
        spotifyArtistsList.innerHTML = `<div class="text-center py-20 text-purple w-full" style="grid-column: span 2;"><i class="fa-solid fa-spinner fa-spin fa-2x"></i><p class="mt-10" style="font-size: 13px;">${appState.language === 'vi' ? 'Tác nhân taxi_sound đang tìm ca sĩ...' : 'taxi_sound is finding artists...'}</p></div>`;

        const isDefaultTheme = ['lofi', 'acoustic', 'pop', 'classical', 'remix', 'podcast'].includes(themeKey);
        const apiKey = appState.ai.geminiKey || "";

        try {
            if (isDefaultTheme) {
                // Map the defaultSongs object { artist: [songs] } to array [{ artist, songs }]
                const themeDataObj = defaultSongs[themeKey];
                currentThemeData = Object.keys(themeDataObj).map(artist => ({
                    artist: artist,
                    songs: themeDataObj[artist]
                }));
            } else if (apiKey) {
                // Call Gemini API to get recommendations dynamically for custom themes
                const prompt = `Selected music theme: "${themeKey}". Provide 4 popular artists/bands fitting this theme. For each artist, suggest exactly 3 popular songs. Write short, matching explanations in ${appState.language === 'vi' ? 'Vietnamese' : 'English'}. Leave the "spotifyId" field empty ("") for all songs. Return ONLY a raw JSON array of objects where each object has "artist" (string) and "songs" (array of objects with keys: "title", "reason", "spotifyId"). Do not include markdown code block formatting (like \`\`\`json), return only the JSON string.`;
                const systemInstruction = `You are a music recommendation assistant for taxi rides named "taxi_sound". Analyze the music theme requested and return exactly 4 appropriate, real, popular artists. For each artist, return exactly 3 real songs. Leave the "spotifyId" field empty ("") in the response. Return ONLY a valid JSON array. Example: [{"artist": "Artist Name", "songs": [{"title": "Song Title", "reason": "Explanation", "spotifyId": ""}]}].`;

                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: `System Instruction: ${systemInstruction}\nUser Prompt: ${prompt}`
                            }]
                        }]
                    })
                });

                if (!response.ok) {
                    throw new Error(`Gemini status ${response.status}`);
                }

                const resData = await response.json();
                if (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
                    let rawText = resData.candidates[0].content.parts[0].text.trim();
                    rawText = rawText.replace(/^```json|```$/g, '').trim();
                    currentThemeData = JSON.parse(rawText);
                } else {
                    throw new Error("Invalid response format");
                }
            } else {
                currentThemeData = generateLocalCustomFallbackData(themeKey);
            }
        } catch (err) {
            console.error("Spotify suggestion error, falling back:", err);
            if (isDefaultTheme) {
                const themeDataObj = defaultSongs[themeKey];
                currentThemeData = Object.keys(themeDataObj).map(artist => ({
                    artist: artist,
                    songs: themeDataObj[artist]
                }));
            } else {
                currentThemeData = generateLocalCustomFallbackData(themeKey);
            }
        }

        displayArtists();
    }

    function generateLocalCustomFallbackData(themeKey) {
        if (appState.language === 'vi') {
            return [
                {
                    artist: `Nghệ sĩ dòng ${themeKey}`,
                    songs: [
                        { title: `Bản nhạc trữ tình cho chủ đề ${themeKey}`, reason: "Phù hợp với không khí chuyến đi theo yêu cầu của bạn", spotifyId: "" },
                        { title: `Tuyển chọn bài hát ${themeKey} hay nhất`, reason: "Giai điệu quen thuộc, thư thái, giàu cảm xúc", spotifyId: "" },
                        { title: `Nhạc không lời nhẹ nhàng chủ đề ${themeKey}`, reason: "Giúp hành trình êm dịu và giảm bớt mệt mỏi", spotifyId: "" }
                    ]
                },
                {
                    artist: `Kênh phát ${themeKey}`,
                    songs: [
                        { title: `Tuyển chọn giai điệu ${themeKey}`, reason: "Được hành khách yêu thích và đề xuất nhiều nhất", spotifyId: "" },
                        { title: `Playlist chill hành trình ${themeKey}`, reason: "Đưa bạn qua các cung đường êm dịu", spotifyId: "" },
                        { title: `Khúc nhạc nhẹ nhàng ${themeKey}`, reason: "Giúp tạo cảm giác bình yên thư giãn", spotifyId: "" }
                    ]
                }
            ];
        } else {
            return [
                {
                    artist: `${themeKey} Artist`,
                    songs: [
                        { title: `Great track for ${themeKey}`, reason: "Perfect match for your requested trip atmosphere", spotifyId: "" },
                        { title: `Top selection of ${themeKey}`, reason: "Relaxing, familiar tones for your ride", spotifyId: "" },
                        { title: `Soft instrumental background - ${themeKey}`, reason: "Keeps the journey peaceful and serene", spotifyId: "" }
                    ]
                },
                {
                    artist: `${themeKey} Channel`,
                    songs: [
                        { title: `Acoustic vibe ${themeKey}`, reason: "Highly requested and peaceful music track", spotifyId: "" },
                        { title: `Trip playlist for ${themeKey}`, reason: "Smooth backing track for your journey", spotifyId: "" }
                    ]
                }
            ];
        }
    }

    function displayArtists() {
        spotifyArtistsList.innerHTML = "";

        if (!currentThemeData || currentThemeData.length === 0) {
            spotifyArtistsList.innerHTML = `<p class="text-center py-20 text-muted w-full" style="grid-column: span 2;">${appState.language === 'vi' ? 'Không có ca sĩ nào được tìm thấy.' : 'No artists found.'}</p>`;
            return;
        }

        // Shuffle and select up to 3 artists
        const shuffled = [...currentThemeData].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, 3);

        selected.forEach(item => {
            const btn = document.createElement('button');
            btn.className = 'theme-pill-btn';
            btn.style.width = '100%';
            btn.innerHTML = `<i class="fa-solid fa-user-tie text-purple"></i> <span>${escapeHtml(item.artist)}</span>`;
            btn.addEventListener('click', () => {
                selectArtist(item.artist);
            });
            spotifyArtistsList.appendChild(btn);
        });
    }

    function selectArtist(artistName) {
        selectedArtistName = artistName;

        if (spotifyArtistStage) {
            spotifyArtistStage.classList.add('hidden');
        }
        spotifyRecommendStage.classList.remove('hidden');
        
        if (spotifySelectedArtistText) {
            spotifySelectedArtistText.textContent = `${appState.language === 'vi' ? 'Ca sĩ / Kênh' : 'Artist / Channel'}: ${artistName}`;
        }

        displaySongs();
    }

    function displaySongs() {
        spotifySongsList.innerHTML = "";

        const artistObj = currentThemeData.find(item => item.artist === selectedArtistName);
        if (!artistObj || !artistObj.songs || artistObj.songs.length === 0) {
            spotifySongsList.innerHTML = `<p class="text-center py-20 text-muted">${appState.language === 'vi' ? 'Không có bài hát nào được tìm thấy.' : 'No songs found.'}</p>`;
            return;
        }

        // Shuffle the songs of the selected artist
        const shuffledSongs = [...artistObj.songs].sort(() => Math.random() - 0.5);

        shuffledSongs.forEach(song => {
            const itemEl = document.createElement('div');
            itemEl.className = 'song-recommendation-item';

            const query = encodeURIComponent(`${song.title} ${selectedArtistName}`);
            const hasValidId = song.spotifyId && song.spotifyId.trim().length === 22;
            const spotifyLink = hasValidId 
                ? `https://open.spotify.com/track/${song.spotifyId.trim()}`
                : `https://open.spotify.com/search/${query}`;

            itemEl.innerHTML = `
                <div class="song-details-box">
                    <p class="song-title-text">${escapeHtml(song.title)}</p>
                    <p class="song-artist-text">${escapeHtml(selectedArtistName)}</p>
                    <p class="song-reason-text">${escapeHtml(song.reason)}</p>
                </div>
                <button class="btn-spotify" onclick="window.open('${spotifyLink}', '_blank')">
                    <i class="fa-brands fa-spotify"></i> <span data-i18n="label_spotify_play">${appState.language === 'vi' ? 'Phát trên Spotify' : 'Play on Spotify'}</span>
                </button>
            `;
            spotifySongsList.appendChild(itemEl);
        });
    }
}

// Simple HTML escaping helper
function escapeHtml(str) {
    if (!str) return "";
    return str.toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
