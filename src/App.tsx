import { useState } from "react"

export default function App() {
  const [result, setResult] = useState<string | null>(null)

  function calculate() {
    const p = Number(
      (document.getElementById("pressure") as HTMLInputElement).value
    )
    const q = Number(
      (document.getElementById("flow") as HTMLInputElement).value
    )
    const e =
      (Number(
        (document.getElementById("eff") as HTMLInputElement).value
      ) || 100) / 100
    const d = Number(
      (document.getElementById("disp") as HTMLInputElement).value
    )

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
  `RESULTS (OFFSHORE DUTY)

Hydraulic Power:
  ${power.toFixed(2)} kW

Motor Speed:
  ${rpm.toFixed(0)} rpm

Shaft Torque:
  ${torque.toFixed(1)} Nm

Recommended Electric Motor:
  ${recommendedPower.toFixed(1)} kW
  (Safety Factor ×${safetyFactor})

Note:
  Values suitable for continuous offshore duty.
`
)

  }

  return (
    <div className="container">
      <header className="header">
        <h1>OCEANIS ANALYTICS</h1>
        <p>Offshore Engineering · Analytics · Decision Tools</p>
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
    style={{
      display: "block",
      marginTop: "6px",
      background: "#020617",
      border: "1px solid #1f2937",
      borderRadius: "8px",
      padding: "10px",
      color: "#e5e7eb",
      width: "100%",
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

      <section className="card">
        <h3>Operational Credibility</h3>
        <p>
          Developed from real offshore operational experience onboard PSV and
          AHTS vessels.
        </p>
        
        <ul>
          <li>Bow thruster HPUs</li>
          <li>Anchor windlasses & winches</li>
          <li>CPP & steering hydraulics</li>
        </ul>
      </section>

      <section className="card">
  <h3>Who This Platform Is For</h3>

  <p>
    Oceanis Analytics is designed for professionals working in offshore and
    marine engineering environments who require fast, reliable decision tools
    grounded in real operational practice.
  </p>

  <ul>
    <li>Chief Engineers and Second Engineers (PSV / AHTS / OSV)</li>
    <li>Offshore Technical Superintendents</li>
    <li>Marine Engineers transitioning to offshore operations</li>
    <li>Engineering cadets and students in marine systems</li>
  </ul>

  <p style={{ marginTop: "12px", color: "#9ca3af" }}>
    Calculations reflect continuous-duty offshore conditions rather than
    laboratory or academic assumptions.
  </p>
</section>

<section className="card">
  <h3>Platform Roadmap</h3>

  <p>
    Oceanis Analytics is under continuous development, with additional tools
    planned to support offshore engineering decisions across multiple systems.
  </p>

  <ul>
    <li>Unit toggles (bar ↔ psi, L/min ↔ GPM)</li>
    <li>Electric motor and VFD sizing</li>
    <li>Hydraulic system efficiency and loss analysis</li>
    <li>PDF calculation reports for technical documentation</li>
    <li>Saved calculations and scenario comparisons</li>
    <li>Training and assessment modules for marine engineers</li>
  </ul>

  <p style={{ marginTop: "12px", color: "#9ca3af" }}>
    Feature development is driven by real offshore operational requirements,
    not theoretical modeling.
  </p>
</section>


   <footer className="footer">
  <strong>Oceanis Analytics</strong> — Offshore Engineering Decision Tools
  <br />
  Built by an offshore Chief Engineer with real operational experience on PSV
  and AHTS vessels.
  <br />
  © 2026 Oceanis Analytics. All rights reserved.
</footer>

    </div>
  )
}

