'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-139bbd8c3827f52f5063d57cfb80cb768857dd19bdbb6e60679e2dea20fc0591acd1b70643dbc41004c7bd6760cd1b8dfffdfcaff3e305b02c39ce52b63b9ffe"' : 'data-bs-target="#xs-components-links-module-AppModule-139bbd8c3827f52f5063d57cfb80cb768857dd19bdbb6e60679e2dea20fc0591acd1b70643dbc41004c7bd6760cd1b8dfffdfcaff3e305b02c39ce52b63b9ffe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-139bbd8c3827f52f5063d57cfb80cb768857dd19bdbb6e60679e2dea20fc0591acd1b70643dbc41004c7bd6760cd1b8dfffdfcaff3e305b02c39ce52b63b9ffe"' :
                                            'id="xs-components-links-module-AppModule-139bbd8c3827f52f5063d57cfb80cb768857dd19bdbb6e60679e2dea20fc0591acd1b70643dbc41004c7bd6760cd1b8dfffdfcaff3e305b02c39ce52b63b9ffe"' }>
                                            <li class="link">
                                                <a href="components/ActividadAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActividadAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActividadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActividadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActividadDocenteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActividadDocenteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActividadUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActividadUpdateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActualizarDatosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActualizarDatosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActualizarDatosPorfesoresComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActualizarDatosPorfesoresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogCRUDComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogCRUDComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogControlsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogControlsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatosPerfilComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatosPerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IMCComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IMCComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MisRutinasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MisRutinasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NosotrosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NosotrosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfesoresComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfesoresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolUpdateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RutinasAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RutinasAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RutinasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RutinasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RutinasPersoAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RutinasPersoAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RutinasPersoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RutinasPersoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RutinasPersoUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RutinasPersoUpdateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RutinasUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RutinasUpdateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SigninComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SigninComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoBlogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoBlogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UbicacionesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UbicacionesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuarioBanComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioBanComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VentasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActividadDocenteService.html" data-type="entity-link" >ActividadDocenteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ActividadService.html" data-type="entity-link" >ActividadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ActualizaDatosService.html" data-type="entity-link" >ActualizaDatosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlogService.html" data-type="entity-link" >BlogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImcService.html" data-type="entity-link" >ImcService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MisRutinasService.html" data-type="entity-link" >MisRutinasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PagoCuotaService.html" data-type="entity-link" >PagoCuotaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolService.html" data-type="entity-link" >RolService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RutinasPersoService.html" data-type="entity-link" >RutinasPersoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RutinasService.html" data-type="entity-link" >RutinasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TipoBlogService.html" data-type="entity-link" >TipoBlogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuariobanService.html" data-type="entity-link" >UsuariobanService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentasService.html" data-type="entity-link" >VentasService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptorService.html" data-type="entity-link" >TokenInterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ProfesoresGuardGuard.html" data-type="entity-link" >ProfesoresGuardGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/actividad.html" data-type="entity-link" >actividad</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Rol.html" data-type="entity-link" >Rol</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/rutina.html" data-type="entity-link" >rutina</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/rutina-1.html" data-type="entity-link" >rutina</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});