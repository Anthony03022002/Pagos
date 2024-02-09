import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Clientespage } from "./pages/Clientespage";
import { ClientesForm } from "./pages/ClientesForm";
import { ProductoPage } from "./pages/ProductoPage";
import { ProductoForm } from "./pages/ProductoForm";
import { PagosMensuales } from "./components/PagosMensuales";
import { Navegacion } from "./components/Navegacion";
import { GenerarPago } from "./pages/GenerarPago";
import { PagosList } from "./pages/PagosList";
import { PagosForm } from "./pages/PagosForm";
import { PagosAngelList } from "./pages/PagosAngelList";
import { PagosAngelForm } from "./pages/PagosAngelForm";
import { PagosAtuntaquiList } from "./pages/PagosAtuntaquiList";
import { PagosAtuntaquiForm } from "./pages/PagosAtuntaquiForm";
import { PagosBolivarList } from "./pages/PagosBolivarList";
import { PagosBolivarForm } from "./pages/PagosBolivarForm";
import { PagosCayambeList } from "./pages/PagosCayambeList";
import { PagosCayambeForm } from "./pages/PagosCayambeForm";
import { PagosLagoList } from "./pages/PagosLagoList";
import { PagosLagoForm } from "./pages/PagosLagoForm";
import { PagosOtavaloList } from "./pages/PagosOtavaloList";
import { PagosOtavaloForm } from "./pages/PagosOtavaloForm";
import { PagosMiraList } from "./pages/PagosMiraList";
import { PagosMiraForm } from "./pages/PagosMiraForm";
import { PagosPimampiroList } from "./pages/PagosPimampiroList";
import { PagosPimampiroForm } from "./pages/PagosPimampiroForm";
import { ClienteAtuntaquiPage } from "./pages/ClienteAtuntaquiPage";
import { ClienteAtuntaquiForm } from "./pages/ClienteAtuntaquiForm";
import { ClienteBolivarForm } from "./pages/ClienteBolivarForm";
import { ClienteBolivarPage } from "./pages/ClienteBolivarPage";
import { ClienteCayambeForm } from "./pages/ClienteCayambeForm";
import { ClienteCayambePage } from "./pages/ClienteCayambePage";
import { ClienteLagoForm } from "./pages/ClienteLagoForm";
import { ClienteLagoPage } from "./pages/ClienteLagoPage";
import { ClienteOtavaloForm } from "./pages/ClienteOtavaloForm";
import { ClienteOtavaloPage } from "./pages/ClienteOtavaloPage";
import { ClienteAngelForm } from "./pages/ClienteAngelForm";
import { ClienteAngelPage } from "./pages/ClienteAngelPage";
import { ClienteMiraForm } from "./pages/ClienteMiraForm";
import { ClienteMiraPage } from "./pages/ClienteMiraPage";
import { ClientePimampiroForm } from "./pages/ClientePimampiroForm";
import { ClientePimampiroPage } from "./pages/ClientePimampiroPage";
import { PagosMensualesAngel } from "./components/PagosMensualesAngel";
import { PagosMensualesAtuntaqui } from "./components/PagosMensualesAtuntaqui";
import { PagosMensualesBolivar } from "./components/PagosMensualesBolivar";
import { PagosMensualesCayambe } from "./components/PagosMensualesCayambe";
import { PagosMensualesLago } from "./components/PagosMensualesLago";
import { PagosMensualesOtavalo } from "./components/PagosMensualesOtavalo";
import { PagosMensualesMira } from "./components/PagosMensualesMira";
import { PagosMensualesPimampiro } from "./components/PagosMensualesPimampiro";
import { GenerarPagoAngel } from "./pages/GenerarPagoAngel";
import { GenerarPagoAtuntaqui } from "./pages/GenerarPagoAtuntaqui";
import { GenerarPagoBolivar } from "./pages/GenerarPagoBolivar";
import { GenerarPagoCayambe } from "./pages/GenerarPagoCayambe";
import { GenerarPagoLago } from "./pages/GenerarPagoLago";
import { GenerarPagoOtavalo } from "./pages/GenerarPagoOtavalo";
import { GenerarPagoMira } from "./pages/GenerarPagoMira";
import { GenerarPagoPimampiro } from "./pages/GenerarPagoPimampiro";

import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>

        ----------------------------Clientes------------------------------------
        <Route path="/" element={<Navigate to="/clientes" />} />
        <Route path="/clientes" element={<Clientespage />} />
        <Route path="/productos" element={<ProductoPage />} />
        <Route path="/clienteAngel" element={<ClienteAngelPage />}/>
        <Route path="/clienteAtuntaqui" element={<ClienteAtuntaquiPage />}/>
        <Route path="/clienteBolivar" element={<ClienteBolivarPage />}/>
        <Route path="/clienteCayambe" element={<ClienteCayambePage />}/>
        <Route path="/clienteLago" element={<ClienteLagoPage />}/>
        <Route path="/clienteOtavalo" element={<ClienteOtavaloPage />}/>
        <Route path="/clienteMira" element={<ClienteMiraPage />}/>
        <Route path="/clientePimampiro" element={<ClientePimampiroPage />}/>
        ----------------------------Formulario de crear----------------------
        <Route path="/crear-clientes" element={<ClientesForm />} />
        <Route path="/crear-producto" element={<ProductoForm />} />
        <Route path="/crear-clienteAngel" element={<ClienteAngelForm />}/>
        <Route path="/crear-clienteAtuntaqui" element={<ClienteAtuntaquiForm />}/>
        <Route path="/crear-clienteBolivar" element={<ClienteBolivarForm />}/>
        <Route path="/crear-clienteCayambe" element={<ClienteCayambeForm />}/>
        <Route path="/crear-clienteLago" element={<ClienteLagoForm />}/>
        <Route path="/crear-clienteOtavalo" element={<ClienteOtavaloForm />}/>
        <Route path="/crear-clienteMira" element={<ClienteMiraForm />}/>
        <Route path="/crear-clientePimampiro" element={<ClientePimampiroForm />}/>
        --------------------------------Clientes id---------------------------
        <Route path="/clientes/:id" element={<ClientesForm />} />
        <Route path="/productos/:nombre_producto" element={<ProductoForm />} />
        <Route path="/clientesAngel/:id" element={<ClienteAngelForm />} />
        <Route path="/clientesAtuntaqui/:id" element={<ClienteAtuntaquiForm />} />
        <Route path="/clienteBolivar/:id" element={<ClienteBolivarForm />} />
        <Route path="/clienteCayambe/:id" element={<ClienteCayambeForm />} />
        <Route path="/clienteLago/:id" element={<ClienteLagoForm />} />
        <Route path="/clienteOtavalo/:id" element={<ClienteOtavaloForm />} />
        <Route path="/clienteMira/:id" element={<ClienteMiraForm />} />
        <Route path="/clientePimampiro/:id" element={<ClientePimampiroForm />} />
        ---------------Crear Pagos------------------------
        <Route path="/crear-pagos" element={<PagosForm />} />
        <Route path="/crear-pagosAngel" element={<PagosAngelForm />} />
        <Route path="/crear-pagosAtuntaqui" element={<PagosAtuntaquiForm />} />
        <Route path="/crear-pagosBolivar" element={<PagosBolivarForm />} />
        <Route path="/crear-pagosCayambe" element={<PagosCayambeForm />} />
        <Route path="/crear-pagosLago" element={<PagosLagoForm />} />
        <Route path="/crear-pagosOtavalo" element={<PagosOtavaloForm />} />
        <Route path="/crear-pagosMira" element={<PagosMiraForm />} />
        <Route path="/crear-pagosPimampiro" element={<PagosPimampiroForm />} />

        ----------------Pagos------------------
        <Route path="/pagos" element={<PagosList />} />
        <Route path="/pagosAngel" element={<PagosAngelList />} />
        <Route path="/pagosAtuntaqui" element={<PagosAtuntaquiList />} />
        <Route path="/pagosBolivar" element={<PagosBolivarList />} />
        <Route path="/pagosCayambe" element={<PagosCayambeList />} />
        <Route path="/pagosLago" element={<PagosLagoList />} />
        <Route path="/pagosOtavalo" element={<PagosOtavaloList />} />
        <Route path="/pagosMira" element={<PagosMiraList />} />
        <Route path="/pagosPimampiro" element={<PagosPimampiroList />} />

        ---------------Pagosid-----------------------
        <Route path="/pagos/:id" element={<PagosForm />} />
        <Route path="/pagosAngel/:id" element={<PagosAngelForm />} />
        <Route path="/pagosAtuntaqui/:id" element={<PagosAtuntaquiForm />} />
        <Route path="/pagosBolivar/:id" element={<PagosBolivarForm />} />
        <Route path="/pagosCayambe/:id" element={<PagosCayambeForm />} />
        <Route path="/pagosLago/:id" element={<PagosLagoForm />} />
        <Route path="/pagosOtavalo/:id" element={<PagosOtavaloForm />} />
        <Route path="/pagosMira/:id" element={<PagosMiraForm />} />
        <Route path="/pagosPimampiro/:id" element={<PagosPimampiroForm />} />

        --------ClientesidPagosmensuales----------------------------------
        <Route path="/clientes/:id/pagosMensuales" element={<PagosMensuales />}/>
        <Route path="/clientesAngel/:id/pagosMensualesAngel" element={<PagosMensualesAngel />}/>
        <Route path="/clientesAtuntaqui/:id/pagosMensualesAtuntaqui" element={<PagosMensualesAtuntaqui />}/>
        <Route path="/clientesBolivar/:id/pagosMensualesBolivar" element={<PagosMensualesBolivar />}/>
        <Route path="/clientesCayambe/:id/pagosMensualesCayambe" element={<PagosMensualesCayambe />}/>
        <Route path="/clientesLago/:id/pagosMensualesLago" element={<PagosMensualesLago />}/>
        <Route path="/clientesOtavalo/:id/pagosMensualesOtavalo" element={<PagosMensualesOtavalo />}/>
        <Route path="/clientesMira/:id/pagosMensualesMira" element={<PagosMensualesMira />}/>
        <Route path="/clientesPimampiro/:id/pagosMensualesPimampiro" element={<PagosMensualesPimampiro />}/>

        --------ClientesidGenerarPago----------------------------------
        <Route path="/clientes/:id/generarPago" element={<GenerarPago />} />
        <Route path="/clientesAngel/:id/generarPagoAngel" element={<GenerarPagoAngel />} />
        <Route path="/clientesAtuntaqui/:id/generarPagoAtuntaqui" element={<GenerarPagoAtuntaqui />} />
        <Route path="/clientesBolivar/:id/generarPagoBolivar" element={<GenerarPagoBolivar />} />
        <Route path="/clientesCayambe/:id/generarPagoCayambe" element={<GenerarPagoCayambe />} />
        <Route path="/clientesLago/:id/generarPagoLago" element={<GenerarPagoLago />} />
        <Route path="/clientesOtavalo/:id/generarPagoOtavalo" element={<GenerarPagoOtavalo />} />
        <Route path="/clientesMira/:id/generarPagoMira" element={<GenerarPagoMira />} />
        <Route path="/clientesPimampiro/:id/generarPagoPimampiro" element={<GenerarPagoPimampiro />} />
        


      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
