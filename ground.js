import { incrementCustomProperty } from "./updateCustomProperty.js"

const SPEED = .05
const groundElems = document.querySelectorAll("[data-ground]")

export function updateGround(delta) {
  groundElems.forEach(ground => {
    incrementCustomProperty(ground, "--left", delta * SPEED * -1)
  })
}