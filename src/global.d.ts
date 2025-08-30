//declaracion de modulos para ts
//si importás un *.module.scss, lo trate como un objeto con claves de clase → styles.myClass.
//si importás un *.scss normal, lo acepte igual aunque no tenga tipado.

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.scss';
