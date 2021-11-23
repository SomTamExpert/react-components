import MyAlert from './components/alerts_dismissible';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExampleToastsDismissible from "./components/toasts_dismissible";
import ExampleToastsStacking from "./components/toasts_stacking";
import ExampleToastsPlacement from "./components/toasts_placement";
import ExampleToastsAutohide from "./components/toasts_autohide";
import ExampleToastsContextualVariations from "./components/toasts_contextual_variations";

function App() {
    return (
        <div className="App">
            {/*<MyAlert/>*/}
            <ExampleToastsDismissible/>
            <ExampleToastsStacking/>
            <ExampleToastsPlacement/>
            <ExampleToastsAutohide/>
            <ExampleToastsContextualVariations/>
        </div>
    );
}

export default App;

