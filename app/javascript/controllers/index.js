// Import the application controller
import { application } from "./application"

// Import and register controllers
import HelloController from "./hello_controller"
application.register("hello", HelloController)

// Export the application for use in other files
export { application }
