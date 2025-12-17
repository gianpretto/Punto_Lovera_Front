import { Routes } from '@angular/router';

// Vistas públicas
import { Home } from './vistas/home/home';
import { ProximasSubastas } from './vistas/proximas-subastas/proximas-subastas';
import { DetalleSubasta } from './vistas/detalle-subasta/detalle-subasta';
import { SubastaActiva } from './vistas/subasta-activa/subasta-activa';

// Autenticación y usuario
import { Login } from './vistas/login/login';
import { Registro } from './vistas/registro/registro';
import { DatosUsuario } from './vistas/datos-usuario/datos-usuario';
import { PanelUsuario } from './vistas/panel-usuario/panel-usuario';
import { Creditos } from './vistas/creditos/creditos';

// Institucional / informativas
import { QuienesSomos } from './vistas/quienes-somos/quienes-somos';
import { QuieroComprar } from './vistas/quiero-comprar/quiero-comprar';
import { QuieroVender } from './vistas/quiero-vender/quiero-vender';
import { Contactanos } from './vistas/contactanos/contactanos';
import { ComoParticipar } from './vistas/como-participar/como-participar';
import { PreguntasFrecuentes } from './vistas/preguntas-frecuentes/preguntas-frecuentes';

export const routes: Routes = [
  // Inicio
  { path: '', component: Home },

  // Subastas
  { path: 'subastas', component: ProximasSubastas },
  { path: 'subastas/:id', component: DetalleSubasta },
  { path: 'subastas/:id/activa', component: SubastaActiva },

  // Autenticación / usuario
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'datos', component: DatosUsuario },
  { path: 'perfil', component: PanelUsuario },
  { path: 'creditos', component: Creditos },

  // Institucional
  { path: 'quienes-somos', component: QuienesSomos },
  { path: 'quiero-comprar', component: QuieroComprar },
  { path: 'quiero-vender', component: QuieroVender },
  { path: 'contactanos', component: Contactanos },
  { path: 'como-participar', component: ComoParticipar },
  { path: 'faq', component: PreguntasFrecuentes },

  // Fallback
  { path: '**', redirectTo: '' }
];
