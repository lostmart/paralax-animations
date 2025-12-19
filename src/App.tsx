import * as images from "./assets/imgs/images"
import "./App.css"

const App = () => {
	return (
		<section className="min-h-screen flex items-center justify-center p-2">
			<div className="w-full max-w-[500px] h-[498px] frame">
				<div className="sky relative w-full h-[382px]">
					<div className="moon absolute"></div>
					<div className="trees absolute"></div>
					<div className="terrain absolute"></div>
					<div className="boat absolute"></div>
					<div className="mountains absolute"></div>
					<div className="lake absolute w-full h-[192px] -bottom-30"></div>
					<div className="reflections absolute w-full"></div>

				</div>
			</div>
		</section>
	)
}

export default App
