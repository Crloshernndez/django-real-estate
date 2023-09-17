from .base import *

# EMAIL
EMAIL_BACKEND       = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST          = 'smtp.gmail.com'
EMAIL_PORT          = 587
EMAIL_HOST_USER     = env('USER_EMAIL_HOST')
EMAIL_HOST_PASSWORD = env('USER_EMAIL_PASSWORD')
EMAIL_USE_TLS       = True
DEFAULT_FROM_EMAIL = "info@real-estate.com"

# Database
DATABASES = {
    'default': {
        'ENGINE': env('POSTGRES_ENGINE'),
        'NAME': env('POSTGRES_DB'),
        'USER': env('POSTGRES_USER'),
        'PASSWORD': env('POSTGRES_PASSWORD'),
        'HOST': env('POSTGRES_HOST'),
        'PORT': env('POSTGRES_PORT'),
    }
}
