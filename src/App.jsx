import { useEffect, useState } from 'react'

export default function App() {
  const [salary, setSalary] = useState(50000)
  const [workDays, setWorkDays] = useState(22)
  const [hoursPerDay, setHoursPerDay] = useState(8)
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const hourlyRate = salary / workDays / hoursPerDay
  const todayEarnings =
    (now.getHours() + now.getMinutes() / 60) * hourlyRate

  return (
    <div className="container">
      <h1>我今天值多少錢</h1>
      <div className="amount">NT$ {todayEarnings.toFixed(0)}</div>

      <label>
        月薪
        <input
          type="number"
          value={salary}
          onChange={e => setSalary(+e.target.value)}
        />
      </label>

      <label>
        工作天數
        <input
          type="number"
          value={workDays}
          onChange={e => setWorkDays(+e.target.value)}
        />
      </label>

      <label>
        每日工時
        <input
          type="number"
          value={hoursPerDay}
          onChange={e => setHoursPerDay(+e.target.value)}
        />
      </label>
    </div>
  )
}