import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    general: {
      myProfile: 'My profile',
      groupChat: 'Group Chat',
      logout: 'Logout'
    },
    auth: {
      hello: 'hello world',
      loginFormMsg1: 'Join thousands of learners from around the world ',
      loginFormMsg2: 'Master web development by making real-life projects. There are multiple paths for you to choose.',
      logWithSocials: 'or continue with these social profile',
      alreadyMember: 'Already a member? ',
      registerMsg: "Don't have an account yet? ",
      login: 'Login',
      register: 'Register',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Password',
      startCoding: 'Start coding now',
      createdBy: 'Created by Carlos Mejía (Meca)',
    },
    profile: {
      personalInfo: 'Personal info',
      basicInfo: 'Basic info, like your name and photo',
      profileLabel: 'Profile',
      profileMsg: 'Some info may be visible to other people',
      changeInfo: 'Change Info',
      changesReflected: 'Changes will be reflected to every services',
      changePhoto: 'CHANGE FOTO',
      edit: 'Edit',
      save: 'Save',
      photoLabel: 'PHOTO',
      nameLabel: 'NAME',
      bioLabel: 'BIO',
      phoneLabel: 'PHONE',
      emailLabel: 'EMAIL',
      passwordLabel: 'PASSWORD'
    },
      notification: {
        error: 'Error!',
        success: 'Success!'
      }
  },
  es: {
    general: {
      myProfile: 'Mi perfil',
      groupChat: 'Chat de grupo',
      logout: 'Salir'
    },
    auth: {
      hello: 'Hola mundo',
      loginFormMsg1: 'Únete a miles de aprendices alrededor del mundo ',
      loginFormMsg2: 'Vuélvete un maestro del desarrollo web haciendo projectos reales. Hay muchos caminos para elegir.',
      logWithSocials: 'o continua una de estas redes sociales',
      alreadyMember: '¿Ya eres miembro? ',
      registerMsg: "¿Todavía no tienes una cuenta? ",
      login: 'Haz login',
      register: 'Regístrate',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Contraseña',
      startCoding: 'Comience ahora',
      createdBy: 'Creado por Carlos Mejía (Meca)',
    },
    profile: {
      personalInfo: 'Información personal',
      basicInfo: 'Información básica, como tu nombre y foto',
      profileLabel: 'Perfil',
      profileMsg: 'Alguna información será visible para otros',
      changeInfo: 'Cambiar información',
      changesReflected: 'Los cambios serán reflejandos en todos los servicios',
      changePhoto: 'CAMBIAR FOTO',
      edit: 'Editar',
      save: 'Guardar',
      photoLabel: 'FOTO',
      nameLabel: 'NOMBRE',
      bioLabel: 'BIO',
      phoneLabel: 'TELÉFONO',
      emailLabel: 'EMAIL',
      passwordLabel: 'CONTRASEÑA',
    },
    notification: {
      error: '¡Error!',
      success: '¡Hecho!'
    }
  }
}

export const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages
});

