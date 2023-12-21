import { createContext, useContext, useEffect, useState } from 'react';
import appFirebase from '../firebase/credenciales';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; 
const auth = getAuth(appFirebase);
const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [user, setUser]= useState({});
  const firestore = getFirestore(appFirebase);
  // const [ registrando, setRegistrando ] = useState(false)

 async function registrarUsuario(email, contraseña, nombre, imagen){
  const infoUsuario = await createUserWithEmailAndPassword(auth,
    email,
    contraseña
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });

    console.log(infoUsuario.user.uid);
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, {correo: email, nombre: nombre, imagen: imagen});
 }

  // cerrar sesion
  const logOut = () => {
    signOut(auth);
  }

  useEffect(() =>{
    const unsuscribe = onAuthStateChanged(auth,(currentUser) => {
      setUser(currentUser);
    })
    return () => {
      unsuscribe();
    }
  },[]);


  return (
    <AuthContext.Provider value={{registrarUsuario, logOut, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth =()=>{
  return useContext(AuthContext);
} 