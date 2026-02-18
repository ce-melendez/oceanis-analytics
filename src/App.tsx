import { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

/* =====================
   LANDING PAGE
===================== */
function Landing() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <header className="header">
        <h1>OCEANIS ANALYTICS</h1>
        <p>
          Engineering intelligence, training tools, and practical decision
          support built from real offshore and operational experience.
        </p>
      </header>

      <section className="card">
        <h2>US Citizenship Quiz App</h2>
        <p>
          Oceanis Analytics develops practical learning tools alongside
          engineering platforms. One of our flagship educational products is the
          <strong> US Citizenship Quiz</strong>.
        </p>
        <ul>
          <li>Real USCIS-style questions</li>
          <li>Practice by topic or random tests</li>
          <li>Mobile-first learning experience</li>
        </ul>

        <div style={{ marginTop: "16px" }}>
          <a
            href="https://play.google.com/store/apps/details?id=com.ormc.quizapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Open Citizenship Quiz</button>
          </a>
        </div>
      </section>

      <section className="card">
        <h2>Engineering Decision Platform</h2>
        <p>
          Access professional offshore engineering calculators and
          decision-support tools built from real vessel experience.
        </p>
        <button onClick={() => navigate("/engineering")}>
          Enter Engineering Platform
        </button>
      </section>

      <footer className="footer">
        <strong>Oceanis Analytics</strong><br />
        Founded by Oscar Melendez<br />
        Offshore Engineering & Educational Platforms<br />
        © 2026 Oceanis Analytics
      </footer>
    </div>
  )
}

/* =====================
   ENGINEERING PLATFORM
===================== */
function EngineeringPlatform() {
  const navigate = useNavigate()
  const [result, setResult] = useState<string | null>(null)

  function calculate() {
    const p = Number((document.getElementById("pressure") as HTMLInputElement).value)
    const q = Number((document.getElementById("flow") as HTMLInputElement).value)
    const e =
      (Number((document.getElementById("eff") as HTMLInputElement).value) || 100) / 100
    const d = Number((document.getElementById("disp") as HTMLInputElement).value)

    if (!p || !q) {
      setResult("Please enter pressure and flow values.")
      return
    }

    const power = (p * q * e) / 600
    const rpm = d ? (q * 1000) / d : 0
    const torque = d ? p * d * 0.159 : 0
    const safetyFactor = 1.25
    const recommendedPower = power * safetyFactor

    setResult(
      `RESULTS (OFFSHORE DUTY)\n\n` +
        `Hydraulic Power: ${power.toFixed(2)} kW\n` +
        `Motor Speed: ${rpm.toFixed(0)} rpm\n` +
        `Shaft Torque: ${torque.toFixed(1)} Nm\n\n` +
        `Recommended Electric Motor: ${recommendedPower.toFixed(1)} kW\n` +
        `(Safety Factor ×${safetyFactor})`
    )
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Engineering Platform</h1>
        <p>Offshore hydraulic power & machinery calculations</p>
      </header>

      <section className="card">
        <h2>Pressure → Power Calculator</h2>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ fontSize: "14px", color: "#9ca3af" }}>
            Offshore Presets
          </label>
          <select
            onChange={(e) => {
              if (e.target.value === "bowThruster") {
                ;(document.getElementById("pressure") as HTMLInputElement).value = "250"
                ;(document.getElementById("flow") as HTMLInputElement).value = "180"
                ;(document.getElementById("eff") as HTMLInputElement).value = "90"
                ;(document.getElementById("disp") as HTMLInputElement).value = "500"
              }
            }}
          >
            <option value="">— Select preset —</option>
            <option value="bowThruster">
              Bow Thruster HPU (PSV / AHTS – DP Ops)
            </option>
          </select>
        </div>

        <div className="inputs">
          <input id="pressure" placeholder="Pressure (bar)" />
          <input id="flow" placeholder="Flow (L/min)" />
          <input id="eff" placeholder="Efficiency (%)" />
          <input id="disp" placeholder="Motor Disp. (cc/rev)" />
        </div>

        <button onClick={calculate}>Calculate</button>

        {result && <div className="result">{result}</div>}
      </section>

      <button onClick={() => navigate("/")}>← Back to Home</button>

      <footer className="footer">
        <strong>Oceanis Analytics</strong><br />
        Founded by Oscar Melendez<br />
        Offshore Engineering & Educational Platforms<br />
        © 2026 Oceanis Analytics
      </footer>
    </div>
  )
}

/* =====================
   APP ROOT
===================== */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/engineering" element={<EngineeringPlatform />} />
    </Routes>
  )
}
