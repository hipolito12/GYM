// Modelo 'actividad'
export type Actividad = {
    ActividadId: number | null;
    NombreActividad: string | null;
    Turno: string | null;
    Hora_Inicio: string | null;
    activa: boolean | null;
    Hora_Fin: string | null;
    Descripcion: string | null;
    Cupo: number | null;
  };
  


  // Modelo 'asistencia'
  export type Asistencia = {
    NroAsistencia: number | null;
    DniFK: number | null;
    ActividadFK: number | null;
    DiaAsistencia: Date | null;
  };
  
  // Modelo 'cuota'
  export type Cuota = {
    CodCuota: number | null;
    DniFK: number | null;
    FechaPago: Date | null;
    precioActual: number | null;
  };
  
  // Modelo 'persona'
  export type Persona = {
    dni: number | null;
    IdRolfk: number | null;
    RutinasFK: number | null;
    email: string | null;
    password: string | null;
    NombreCompleto: string | null;
    sexo: string | null;
    telefono: string | null;
    direccion: string | null;
    estado: boolean | null;
  };
  
  // Modelo 'personaacargoactividad'
  export type PersonaACargoActividad = {
    DniPersonaAcargo: number | null;
    IdActividadFk: number | null;
  };
  
  // Modelo 'post'
  export type Post = {
    idPost: number | null;
    DniAutor: number | null;
    TipoPostFk: number | null;
    Titulo: string | null;
    Cuerpo: string | null;
    imagen: string | null;
    fecha: Date | null;
    visible: boolean | null;
  };
  
  
  // Modelo 'rol'
  export type Rol = {
    idrol: number | null;
    NombreRol: string | null;
    Descripcion: string | null;
    activa: boolean | null;
  };
  

  // Modelo 'rutinagenerica'
  export type RutinaGenerica = {
    idRutinaGenerica: number | null;
    ActividadFk: number | null;
    DescripcionRutina: string | null;
    Imagenes: string | null;
    TipoRutinaFk: number | null;
    fechaActualizacion: string | null;
    activa: boolean | null;
  };
  

  // Modelo 'rutinapersonalizada'
  export type RutinaPersonalizada = {
    idRutinaPersonalizada: number | null;
    IdActividadfk: number | null;
    TipoRutinaFk: number | null;
    PersonaDniFk: number | null;
    DescripcionRutina: string | null;
    Imagenes: string | null;
    fechaActualizacion: Date | null;
    activo: boolean | null;
  };
  

  // Modelo 'tipopost'
  export type TipoPost = {
    TipoId: number | null;
    NombreTipo: string | null;
    visible: boolean | null;
  };

  
  // Modelo 'tiporutina'
  export type TipoRutina = {
    idTipoRutina: number | null;
    NombreTipo: string | null;
    visible: boolean | null;
  };
  
  // Modelo 'venta'
  export type Venta = {
    CodVenta: number | null;
    TrabajadorIDni: number | null;
    NombeProducto: string | null;
    precio: number | null;
    cantidad: number | null;
  };
  
  // Modelo 'preciocuota'
  export type PrecioCuota = {
    idpreciocuota: number | null;
    valor: number | null;
    fechaActualizacion: Date | null;
  };
  