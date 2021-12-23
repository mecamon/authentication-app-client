import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    message: {
      hello: 'hello world',
      loginFormMsg1: 'Join thousands of learners from around the world ',
      loginFormMsg2: 'Master web development by making real-life projects. There are multiple paths for you to choose.',
      logWithSocials: 'or continue with these social profile',
      alreadyMember: 'Adready a member? ',
      registerMsg: "Don't have an account yet? ",
      login: 'Login',
      register: 'Register',
      startCoding: 'Start coding now',
      createdBy: 'Created by Carlos Mejía (Meca)'
    }
  },
  es: {
    message: {
      hello: 'Hola mundo',
      loginFormMsg1: 'Únete a miles de aprendices alrededor del mundo ',
      loginFormMsg2: 'Vuélvete un maestro del desarrollo web haciendo projectos reales. Hay muchos caminos para elegir.',
      logWithSocials: 'o continua una de estas redes sociales',
      alreadyMember: '¿Ya eres miembro? ',
      registerMsg: "¿Todavía no tienes una cuenta? ",
      login: 'Haz login',
      register: 'Registrate',
      startCoding: 'Comience ahora',
      createdBy: 'Creado por Carlos Mejía (Meca)'
    }
  }
}

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'es',
  messages
});

