import { AuthProvider } from "./Screens/Auth/Context/Auth.context";
import { TaskProvider } from "./Screens/Panel/context/Tasks.context";
import { AppRoutes } from "./routes";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <AppRoutes />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
