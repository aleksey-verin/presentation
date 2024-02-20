import { useEffect } from 'react'

const NUM_CONFETTI = 350
const COLORS = [
  [85, 71, 106],
  [174, 61, 99],
  [219, 56, 83],
  [244, 92, 68],
  [248, 182, 70],
]
const PI_2 = 2 * Math.PI

type Confetti = {
  style: number[]
  r: number
  r2: number
  opacity: number
  dop: number
  x: number
  y: number
  xmax: number
  ymax: number
  vx: number
  vy: number
}

const useAnimation = (canvasRef: React.MutableRefObject<null>) => {
  useEffect(() => {
    let w = 0
    let h = 0
    let xpos = 0.5

    if (!canvasRef.current) return
    const canvas = canvasRef.current as HTMLCanvasElement
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    let requestId: number

    const resizeWindow = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resizeWindow)
    resizeWindow()
    // window.onload = () => setTimeout(resizeWindow, 0)

    const range = (a: number, b: number) => (b - a) * Math.random() + a

    const drawCircle = (x: number, y: number, r: number, style: string) => {
      context.beginPath()
      context.arc(x, y, r, 0, PI_2, false)
      context.fillStyle = style
      context.fill()
    }

    document.onmousemove = (e) => {
      xpos = e.pageX / w
    }

    const confetti: Confetti[] = []
    for (let i = 0; i < NUM_CONFETTI; i++) {
      confetti.push({
        style: COLORS[Math.floor(range(0, 5))],
        r: Math.floor(range(2, 6)),
        r2: 0,
        opacity: 0,
        dop: 0.03 * range(1, 4),
        x: 0,
        y: 0,
        xmax: 0,
        ymax: 0,
        vx: 0,
        vy: 0,
      })
    }

    const replace = (c: Confetti) => {
      c.opacity = 0
      c.dop = 0.03 * range(1, 4)
      c.x = range(-c.r2, w - c.r2)
      c.y = range(-20, h - c.r2)
      c.xmax = w - c.r
      c.ymax = h - c.r
      c.vx = range(0, 2) + 8 * xpos - 5
      c.vy = 0.7 * c.r + range(-1, 1)
    }

    const step = () => {
      requestId = requestAnimationFrame(step)
      context.clearRect(0, 0, w, h)
      confetti.forEach((c) => {
        c.x += c.vx
        c.y += c.vy
        c.opacity += c.dop
        if (c.opacity > 1) {
          c.opacity = 1
          c.dop *= -1
        }
        if (c.opacity < 0 || c.y > c.ymax) {
          replace(c)
        }
        if (!(c.x > 0 && c.x < c.xmax)) {
          c.x = (c.x + c.xmax) % c.xmax
        }
        drawCircle(
          Math.floor(c.x),
          Math.floor(c.y),
          c.r,
          `rgba(${c.style[0]},${c.style[1]},${c.style[2]},${c.opacity})`
        )
      })
    }

    step()

    return () => {
      cancelAnimationFrame(requestId)
      window.removeEventListener('resize', resizeWindow)
    }
  }, [])
}

export default useAnimation
