// Enum cho các ngôn ngữ được hỗ trợ
export const LANGUAGES = {
  VI: "vi",
  EN: "en",
};

// Enum cho các key translation
export const TRANSLATION_KEYS = {
  // Header
  HOME: "home",
  ABOUT: "about",
  SKILLS: "skills",
  CONTACT: "contact",
  DOWNLOAD_CV: "download_cv",
  WORK_EXPERIENCES: "work_experiences",
  OPEN_SOURCE: "open_source",
  BLOGS: "blogs",
  TALKS: "talks",
  RESUME: "resume",

  // Hero Section
  HELLO: "hello",
  I_AM: "i_am",
  FULL_STACK_DEVELOPER: "full_stack_developer",
  WELCOME_MESSAGE: "welcome_message",
  GET_IN_TOUCH: "get_in_touch",

  // Hero Section - new keys
  GREETING: "greeting",
  TYPEWRITER_GREETING: "typewriter_greeting",
  TYPEWRITER_ROLE: "typewriter_role",
  TYPEWRITER_PASSION: "typewriter_passion",
  SKILL_REACT: "skill_react",
  SKILL_VUE: "skill_vue",
  SKILL_SPRING: "skill_spring",
  SKILL_MONGODB: "skill_mongodb",
  SKILL_FASTAPI: "skill_fastapi",
  SKILL_GITHUB: "skill_github",
  SKILL_MYSQL: "skill_mysql",
  SKILL_POSTGRES: "skill_postgres",
  LINK_GITHUB: "link_github",
  LINK_LINKEDIN: "link_linkedin",
  LINK_TWITTER: "link_twitter",
  LINK_FACEBOOK: "link_facebook",
  LINK_INSTAGRAM: "link_instagram",
  LINK_GITLAB: "link_gitlab",

  // Skills Section
  PROFESSIONAL_SKILLS: "professional_skills",
  SKILLS_DESCRIPTION: "skills_description",
  FRONTEND: "frontend",
  BACKEND: "backend",
  DEVOPS: "devops",
  ALL: "all",
  TECHNOLOGIES: "technologies",
  FIELDS: "fields",
  YEARS_EXPERIENCE: "years_experience",
  PROJECTS: "projects",
  EXPLORE_MY_PROJECTS: "explore_my_projects",

  // Contact Section
  GET_IN_TOUCH_TITLE: "get_in_touch_title",
  CONTACT_DESCRIPTION: "contact_description",
  YOUR_NAME: "your_name",
  YOUR_EMAIL: "your_email",
  YOUR_MESSAGE: "your_message",
  SEND_MESSAGE: "send_message",
  CONTACT_INFO: "contact_info",
  EMAIL: "email",
  PHONE: "phone",
  LOCATION: "location",

  // Common
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
  CLOSE: "close",
  SEND: "send",
  CANCEL: "cancel",

  // About Me
  FULL_NAME: "full_name",
  AGE: "age",
  STUDENT_YEAR: "student_year",
  UNIVERSITY: "university",
  ADDRESS_LINE: "address_line",
  STRENGTHS_TITLE: "strengths_title",
  STRENGTHS_1: "strengths_1",
  STRENGTHS_2: "strengths_2",
  STRENGTHS_3: "strengths_3",
  STRENGTHS_4: "strengths_4",
  STRENGTHS_5: "strengths_5",
  STRENGTHS_6: "strengths_6",
  GOALS_TITLE: "goals_title",
  GOALS_1: "goals_1",
  GOALS_2: "goals_2",
  GOALS_3: "goals_3",
  GOALS_4: "goals_4",
  ABOUT_DESCRIPTION: "about_description",

  // Personal Projects
  EXPERIENCE_TITLE: "experience_title",
  EXPERIENCE_DESCRIPTION: "experience_description",
  CATEGORY_ALL: "category_all",
  CATEGORY_INTERNSHIP: "category_internship",
  CATEGORY_PERSONAL: "category_personal",
  CATEGORY_GROUP: "category_group",
  ACHIEVEMENTS_TITLE: "achievements_title",
  BUTTON_FRONTEND: "button_frontend",
  BUTTON_BACKEND: "button_backend",
  BUTTON_VIEW_DEMO: "button_view_demo",
  BUTTON_VIEW_CODE: "button_view_code",
  TEAM_SIZE: "team_size",

  // Project 1: Techkan
  PROJECT_TECHKAN_TITLE: "project_techkan_title",
  PROJECT_TECHKAN_DESCRIPTION: "project_techkan_description",
  PROJECT_TECHKAN_COMPANY: "project_techkan_company",
  PROJECT_TECHKAN_ROLE: "project_techkan_role",
  PROJECT_TECHKAN_DURATION: "project_techkan_duration",
  PROJECT_TECHKAN_ACHIEVEMENT_1: "project_techkan_achievement_1",
  PROJECT_TECHKAN_ACHIEVEMENT_2: "project_techkan_achievement_2",
  PROJECT_TECHKAN_ACHIEVEMENT_3: "project_techkan_achievement_3",

  // Project 2: Ptran Fashion
  PROJECT_PTRAN_TITLE: "project_ptran_title",
  PROJECT_PTRAN_DESCRIPTION: "project_ptran_description",
  PROJECT_PTRAN_ROLE: "project_ptran_role",
  PROJECT_PTRAN_DURATION: "project_ptran_duration",
  PROJECT_PTRAN_ACHIEVEMENT_1: "project_ptran_achievement_1",
  PROJECT_PTRAN_ACHIEVEMENT_2: "project_ptran_achievement_2",
  PROJECT_PTRAN_ACHIEVEMENT_3: "project_ptran_achievement_3",

  // Project 3: Shoez
  PROJECT_SHOEZ_TITLE: "project_shoez_title",
  PROJECT_SHOEZ_DESCRIPTION: "project_shoez_description",
  PROJECT_SHOEZ_ROLE: "project_shoez_role",
  PROJECT_SHOEZ_DURATION: "project_shoez_duration",
  PROJECT_SHOEZ_TEAM_SIZE: "project_shoez_team_size",
  PROJECT_SHOEZ_ACHIEVEMENT_1: "project_shoez_achievement_1",
  PROJECT_SHOEZ_ACHIEVEMENT_2: "project_shoez_achievement_2",
  PROJECT_SHOEZ_ACHIEVEMENT_3: "project_shoez_achievement_3",

  // Project 4: Real-time Messaging
  PROJECT_MESSAGING_TITLE: "project_messaging_title",
  PROJECT_MESSAGING_DESCRIPTION: "project_messaging_description",
  PROJECT_MESSAGING_ROLE: "project_messaging_role",
  PROJECT_MESSAGING_DURATION: "project_messaging_duration",
  PROJECT_MESSAGING_ACHIEVEMENT_1: "project_messaging_achievement_1",
  PROJECT_MESSAGING_ACHIEVEMENT_2: "project_messaging_achievement_2",
  PROJECT_MESSAGING_ACHIEVEMENT_3: "project_messaging_achievement_3",

  // Hobbies
  HOBBY_FOOTBALL: "hobby_football",
  HOBBY_FOOTBALL_DESC: "hobby_football_desc",
  HOBBY_VOLLEYBALL: "hobby_volleyball",
  HOBBY_VOLLEYBALL_DESC: "hobby_volleyball_desc",
  HOBBY_GUITAR: "hobby_guitar",
  HOBBY_GUITAR_DESC: "hobby_guitar_desc",
  HOBBY_CAJON: "hobby_cajon",
  HOBBY_CAJON_DESC: "hobby_cajon_desc",
  HOBBY_READING: "hobby_reading",
  HOBBY_READING_DESC: "hobby_reading_desc",
  HOBBY_TECHNOLOGY: "hobby_technology",
  HOBBY_TECHNOLOGY_DESC: "hobby_technology_desc",

  // Contact
  CALL_ME: "call_me",
  CHAT_LIVE: "chat_live",
  CHAT_AVAILABLE: "chat_available",
  ASK_QUESTION: "ask_question",
  ASK_QUESTION_DETAIL: "ask_question_detail",
  BUTTON_CHAT_NOW: "button_chat_now",
  BUTTON_GET_STARTED: "button_get_started",
  BUTTON_VISIT_PAGE: "button_visit_page",
  BUTTON_FOLLOW_US: "button_follow_us",
  CONNECT_TITLE: "connect_title",
  ADDRESS_FULL: "address_full",

  // Skills
  OTHER: "other",
};

// Cấu hình ngôn ngữ
export const LANGUAGE_CONFIG = {
  [LANGUAGES.VI]: {
    name: "Tiếng Việt",
    flag: "🇻🇳",
    direction: "ltr",
  },
  [LANGUAGES.EN]: {
    name: "English",
    flag: "🇺🇸",
    direction: "ltr",
  },
};
