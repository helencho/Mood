import React, { Component } from 'react'
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts'

class MonthInMoods extends Component {
    render() {
        const { year, entries } = this.props

        // Count up all the moods felt in that year and month 
        // Year: if 2018 => takes 2018 
        // Month: if 1 (Jan) => takes 2 
        const countAllMoods = (year, month) => {
            let monthMoods = {}

            const targetStart = new Date(`${year}-${(month - 1).toString()}`) // 2 => 2018-01-01
            const targetEnd = new Date(`${year}-${month}`) // 2 => 2018-02-01

            entries.map(entry => {
                const compare = new Date(entry.entry_date)
                if (compare >= targetStart && compare < targetEnd) {
                    if (!monthMoods[entry.mood_name]) {
                        monthMoods[entry.mood_name] = 1
                    } else {
                        monthMoods[entry.mood_name]++
                    }
                }
            })
            return monthMoods
        }

        // Get current month 
        let today = new Date()
        let month = today.getMonth()

        // Monthly moods counted as an object 
        const moodsTable = countAllMoods(year - 1, month + 2)

        // Populate moods from the object as a dataset 
        let data = []
        for (let mood in moodsTable) {
            data.push({ name: mood, value: moodsTable[mood] })
        }

        const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658']

        return (
            <div>
                <h3>Moods of the month</h3>
                <ResponsiveContainer height={400} width="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius="60%"
                            outerRadius="80%"
                            fill="#8884d8"
                            paddingAngle={5}
                        >
                            {data.map((entry, index) => <Cell key={index} fill={colors[index]} />)}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        )
    }
}


export default MonthInMoods