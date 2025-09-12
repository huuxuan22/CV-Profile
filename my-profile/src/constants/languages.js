// Enum cho các ngôn ngữ được hỗ trợ
export const LANGUAGES = {
  VI: 'vi',
  EN: 'en'
};

// Enum cho các key translation
export const TRANSLATION_KEYS = {
  // Header
  HOME: 'home',
  ABOUT: 'about',
  SKILLS: 'skills',
  CONTACT: 'contact',
  DOWNLOAD_CV: 'download_cv',
  WORK_EXPERIENCES: 'work_experiences',
  OPEN_SOURCE: 'open_source',
  ACHIEVEMENTS: 'achievements',
  BLOGS: 'blogs',
  TALKS: 'talks',
  RESUME: 'resume',
  
  // Hero Section
  HELLO: 'hello',
  I_AM: 'i_am',
  FULL_STACK_DEVELOPER: 'full_stack_developer',
  WELCOME_MESSAGE: 'welcome_message',
  GET_IN_TOUCH: 'get_in_touch',
  
  // Skills Section
  PROFESSIONAL_SKILLS: 'professional_skills',
  SKILLS_DESCRIPTION: 'skills_description',
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  DEVOPS: 'devops',
  ALL: 'all',
  TECHNOLOGIES: 'technologies',
  FIELDS: 'fields',
  YEARS_EXPERIENCE: 'years_experience',
  PROJECTS: 'projects',
  EXPLORE_MY_PROJECTS: 'explore_my_projects',
  
  // Contact Section
  GET_IN_TOUCH_TITLE: 'get_in_touch_title',
  CONTACT_DESCRIPTION: 'contact_description',
  YOUR_NAME: 'your_name',
  YOUR_EMAIL: 'your_email',
  YOUR_MESSAGE: 'your_message',
  SEND_MESSAGE: 'send_message',
  CONTACT_INFO: 'contact_info',
  EMAIL: 'email',
  PHONE: 'phone',
  LOCATION: 'location',
  
  // Common
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
  CLOSE: 'close',
  SEND: 'send',
  CANCEL: 'cancel'
};

// Cấu hình ngôn ngữ
export const LANGUAGE_CONFIG = {
  [LANGUAGES.VI]: {
    name: 'Tiếng Việt',
    flag: '🇻🇳',
    direction: 'ltr'
  },
  [LANGUAGES.EN]: {
    name: 'English',
    flag: '🇺🇸',
    direction: 'ltr'
  }
};
