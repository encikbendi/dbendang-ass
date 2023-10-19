// import { WebStorageKeys } from 'app/types/enums'
// import jwtDecode from 'jwt-decode'
// import SuperTokens from 'supertokens-auth-react'
// import EmailPassword from 'supertokens-auth-react/recipe/emailpassword'
// import Session from 'supertokens-auth-react/recipe/session'
// import { getStorageItem, removeStorageItem, setStorageItem } from './webStorage'
// import addDays from 'date-fns/esm/addDays'
// import { type RecipePreAPIHookContext } from 'supertokens-auth-react/lib/build/recipe/recipeModule/types'
// import config from 'app/config'

// export const initSupertokens = () => {
//   SuperTokens.init({
//     appInfo: {
//       appName: 'Port Monitoring',
//       apiDomain: config.gateway.baseUrl,
//       websiteDomain: config.app.baseUrl,
//       apiBasePath: '/auth',
//       websiteBasePath: '/login'
//     },
//     recipeList: [
//       EmailPassword.init({
//         getRedirectionURL: async (context) => {
//           if (context.action === 'SUCCESS') {
//             const url = getStorageItem(WebStorageKeys.UrlToRedirect)
//             if (url) {
//               return url
//             }
//             return '/o'
//           }
//           return undefined
//         },
//         useShadowDom: false,
//         style: `
//         [data-supertokens~=superTokensBranding]{
//           display: none;
//         }
//         `,
//         resetPasswordUsingTokenFeature: {
//           submitNewPasswordForm: {
//             style: `
//             @media (max-width: 600px){
//               [data-supertokens~=container]{
//                 height: 100vh;
//                 width: 100vw;
//                 overflow: hidden;
//                 margin: 0;
//                 background-position: center 35vw;
//               }
//               [data-supertokens~=row]{
//                 padding: 20px 50px;
//               }
//               [data-supertokens~=headerTitle]{
//                 font-size: 1rem;
//               }
//             }
//             @media (min-width: 601px){
//               [data-supertokens~=container]{
//                 background-position: center 25px !important;
//                 height: 50vh;
//               }
//               [data-supertokens~=row]{
//                 padding-top: 100px;
//               }
//               [data-supertokens~=headerTitle]{
//                 font-size: 1.2rem;
//               }
//             }
//             [data-supertokens~=container]{
//               background-image: url("https://swiftlogistics.com.my/wp-content/uploads/2022/04/Swiftlogo_noText.png");
//               background-repeat: no-repeat;
//               background-size: 150px;
//             }
//             [data-supertokens~=row]{
//               margin: 50% auto;
//               height: 55vh;
//             }
//             [data-supertokens~=divider] {
//               display: none;
//             }
//             [data-supertokens~=headerTitle] {
//               font-family: Arial;
//               font-weight: 400;
//               opacity: 0.9;
//             }
//             [data-supertokens~=inputWrapper] {
//               border-radius: 3px;
//               height: 50px;
//               width: 100%;
//               font-family: arial;
//               box-shadow: none!important;
//               border-color: #BBBBBB!important;
//             }
//             [data-supertokens~=formRow] {
//               padding-bottom: 10px;
//             }
//             [data-supertokens~=button] {
//               background-color: #211aff;
//               border: 0px;
//               width: 100%;
//               height: 50px;
//               margin: 15px auto;
//             }
//             [data-supertokens~=backButton] {
//               position: relative;
//               right: 30px;
//             }
//         `
//           }
//         },
//         preAPIHook: async (context) => {
//           // Doesn't work
//           return context
//         },
//         postAPIHook: async (context) => {
//           if (
//             context.action === 'EMAIL_PASSWORD_SIGN_IN' ||
//             context.action === 'EMAIL_PASSWORD_SIGN_UP'
//           ) {
//             const res = await context.fetchResponse.json()
//             initUser(res.jwt)
//           }
//         },
//         signInAndUpFeature: {
//           signInForm: {
//             style: `
//             @media (max-width: 600px){
//               [data-supertokens~=container]{
//                 height: 100vh;
//                 width: 100vw;
//                 overflow: hidden;
//                 margin: 0;
//                 background-position: center 35vw;
//               }
//               [data-supertokens~=row]{
//                 padding: 20px 50px;
//               }
//               [data-supertokens~=headerTitle]{
//                 font-size: 1rem;
//               }
//             }
//             @media (min-width: 601px){
//               [data-supertokens~=container]{
//                 background-position: center 25px !important;
//                 height: 45vh;
//               }
//               [data-supertokens~=row]{
//                 padding-top: 10vh;
//               }
//               [data-supertokens~=headerTitle]{
//                 font-size: 1.2rem;
//               }
//             }
//             [data-supertokens~=container]{
//               background-image: url("https://swiftlogistics.com.my/wp-content/uploads/2022/04/Swiftlogo_noText.png");
//               background-repeat: no-repeat;
//               background-size: 150px;
//             }
//             [data-supertokens~=row]{
//               margin: 50% auto;
//               height: 40vh;
//             }
//             [data-supertokens~=divider] {
//               display: none;
//             }
//             [data-supertokens~=headerTitle] {
//               font-family: Arial;
//               font-weight: 400;
//               opacity: 0.9;
//             }
//             [data-supertokens~=headerSubtitle] {
//               display: none;
//             }
//             [data-supertokens~=label] {
//               display: none;
//             }
//             [data-supertokens~=inputWrapper] {
//               border: 0.5px solid #BBBBBB;
//               border-radius: 3px;
//               height: 50px;                width: 100%;
//               font-family: arial;
//             }
//             [data-supertokens~=formRow] {
//               padding-bottom: 10px;
//             }
//             [data-supertokens~=button] {
//               background-color: #211aff;
//               border: 0px;
//               width: 100%;
//               height: 50px;
//               margin: 15px auto;
//             }
//             `,
//             formFields: [
//               {
//                 id: 'email',
//                 label: 'Username or email',
//                 placeholder: 'Username or email'
//               }
//             ]
//           },
//           signUpForm: {
//             formFields: [
//               {
//                 id: 'email',
//                 label: 'Username',
//                 placeholder: 'Username',
//                 validate: async (input) => {
//                   // the backend validates this anyway. So nothing required here
//                   return undefined
//                 }
//               },
//               {
//                 id: 'actualEmail',
//                 validate: async (input) => {
//                   // the backend validates this anyway. So nothing required here
//                   return undefined
//                 },
//                 label: 'Email',
//                 optional: true
//               }
//             ]
//           }
//         }
//       }),
//       Session.init({
//         preAPIHook: async (context: RecipePreAPIHookContext<any>) => {
//           const jwt = getStorageItem('jwt')

//           if (jwt !== null) {
//             ;(context.requestInit.headers as any).Authorization = 'Bearer ' + jwt
//           }

//           return context
//         },
//         override: {
//           functions: (oI: any) => {
//             return {
//               ...oI,
//               addXMLHttpRequestInterceptor: function (input: any) {
//                 // do nothing..
//               },
//               addFetchInterceptorsAndReturnModifiedFetch: function (input: any) {
//                 return input.originalFetch
//               },
//               doesSessionExist: async function () {
//                 return getStorageItem(WebStorageKeys.Jwt) !== null
//               },
//               getAccessTokenPayloadSecurely: async function () {
//                 return getStorageItem(WebStorageKeys.User)
//               },
//               getUserId: async function (input: any) {
//                 const accessTokenPayload = await this.getAccessTokenPayloadSecurely(input)

//                 if (!accessTokenPayload) {
//                   authCleanup()
//                 }

//                 return accessTokenPayload.sub
//               },
//               signOut: async function (input: any) {
//                 authCleanup()
//               }
//             }
//           }
//         }
//       })
//     ]
//   })
// }

// export const clearCache = () => {
//   if (caches) {
//     caches.keys().then((names) => {
//       for (const name of names) {
//         caches.delete(name)
//       }
//     })
//   }
// }

// export const authCleanup = () => {
//   clearCache()
//   Object.keys(localStorage).forEach((key: string) => {
//     if (key !== WebStorageKeys.Flags) {
//       removeStorageItem(key)
//     }
//   })
// }

// export const initUser = async (jwt: string) => {
//   const user = (await jwtDecode(jwt)) as { exp: number, user: User }
//   const tokenExpiry = user?.exp * 1000
//   const ttl = addDays(new Date(), config.logOutAfterDays).getTime()

//   setStorageItem(WebStorageKeys.Jwt, jwt, ttl)
//   setStorageItem(WebStorageKeys.User, user, ttl)
//   setStorageItem(WebStorageKeys.TokenExpiry, tokenExpiry, ttl)
// }

// export const getJwt = async () => {
//   const existingJwt = getStorageItem(WebStorageKeys.Jwt)

//   if (!existingJwt) {
//     return null
//   }

//   const expiry = getStorageItem(WebStorageKeys.TokenExpiry)

//   if (new Date().getTime() > expiry) {
//     const res = await fetch(`${config.gateway.baseUrl}/api/auth/refresh-token`, {
//       headers: {
//         ...(existingJwt && { authorization: `Bearer ${existingJwt}` }),
//         'accept-language': getStorageItem(WebStorageKeys.Lang) || 'en-MY'
//       }
//     }).then(async (res) => await res.json())

//     if (res.jwt) {
//       initUser(res.jwt)
//     }

//     return res.jwt
//   } else {
//     return existingJwt
//   }
// }

// export const getJwtPayload = async () => {
//   const jwt = await getJwt()
//   const payload: any = await jwtDecode(jwt)

//   return payload || []
// }
