import "./App.css"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"

const App = () => {
	const mouseY = useMotionValue(0)

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouseY.set(e.clientY)
		}

		window.addEventListener("mousemove", handleMouseMove)
		return () => window.removeEventListener("mousemove", handleMouseMove)
	}, [mouseY])

	// Transform mouse Y (0 to window height) into moon movement
	const moonY = useTransform(mouseY, [0, window.innerHeight], [20, -20])

	return (
		<section className="min-h-screen flex items-center justify-center p-2">
			<div className="w-full max-w-[500px] h-[498px] frame">
				<div className="sky relative w-full h-[382px]">
					<motion.div style={{ y: moonY }} className="moon"></motion.div>
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
