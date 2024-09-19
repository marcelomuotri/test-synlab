Intenté mantenerla simple. Primero, revisé la API y observé que no soporta la paginación de datos. Por lo tanto, decidí paginar directamente en el componente para emular ese comportamiento.

Utilicé React Router DOM, aunque no era necesario porque solo hay una página. Sin embargo, configuré un layout que puede aplicarse a futuras páginas.

Usé Material UI para facilitar el diseño.

Para la llamada a la API, opté por crear un custom hook sencillo con todo lo necesario. Si la API hubiera soportado paginación, habría considerado usar RTK Query para almacenar los datos en caché y evitar refetchs en páginas que ya se hubieran cargado previamente.

Para los tests, utilicé Vitest, que es complementario de Jest, junto con React Testing Library.

Instrucciones para ejecutar el proyecto:
npm install
npm run dev

Para test:
npx vitest

Tambien hice un deploy rapido por si lo quieres ver online
https://test-synlab.vercel.app/home
