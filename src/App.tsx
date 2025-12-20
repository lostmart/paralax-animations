import "./App.css"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"

const App = () => {
	const mouseY = useMotionValue(0)
	const mouseX = useMotionValue(0)

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouseY.set(e.clientY)
			mouseX.set(e.clientX)
		}

		window.addEventListener("mousemove", handleMouseMove)
		return () => window.removeEventListener("mousemove", handleMouseMove)
	}, [mouseY, mouseX])

	// Transform mouse Y (0 to window height) into moon movement
	const moonY = useTransform(mouseY, [0, window.innerHeight], [-3, 3])
	const moonX = useTransform(mouseX, [0, window.innerWidth], [-3, 3])

	// Transform mouse Y (0 to window height) into mountains movement
	const mountainsY = useTransform(mouseY, [0, window.innerHeight], [-5, 5])
	const mountainsX = useTransform(mouseX, [0, window.innerWidth], [-5, 5])

	// Transform mouse Y (0 to window height) into boat movement
	const boatY = useTransform(mouseY, [0, window.innerHeight], [4, -4])
	const boatX = useTransform(mouseX, [0, window.innerWidth], [4, -4])

	// Transform mouse Y (0 to window height) into terrain movement
	const terrainY = useTransform(mouseY, [0, window.innerHeight], [8, -8])
	const terrainX = useTransform(mouseX, [0, window.innerWidth], [8, -8])

	// Transform mouse Y (0 to window height) into trees front movement
	const treesY = useTransform(mouseY, [0, window.innerHeight], [10, -10])
	const treesX = useTransform(mouseX, [0, window.innerWidth], [10, -10])

	return (
		<section className="min-h-screen flex items-center justify-center p-2">
			<div className="w-full max-w-[500px] h-[498px] frame">
				<div className="sky relative w-full h-[382px]">
					<motion.div
						style={{
							y: treesY,
							x: treesX,
						}}
						className="trees absolute"
					></motion.div>
					<motion.div
						style={{ y: terrainY, x: terrainX }}
						className="terrain absolute"
					></motion.div>
					<motion.div
						style={{ y: moonY, x: moonX }}
						className="moon"
					></motion.div>
					<motion.div
						style={{ y: mountainsY, x: mountainsX }}
						className="mountains absolute w-full"
					></motion.div>
					<div className="lake absolute w-full h-[192px] -bottom-30"></div>
					<div className="reflections-three waving-slower  absolute w-full"></div>
					<div className="reflections-two waving-slower  absolute w-full"></div>

					<div className="reflections waving absolute w-full"></div>
					<motion.div
						style={{ y: boatY, x: boatX }}
						className="boat absolute swaying"
					></motion.div>
				</div>
			</div>
		</section>
	)
}

export default App
