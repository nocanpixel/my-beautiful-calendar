import React, { useState } from 'react';
import './styles.css';
import { daysOfWeek } from '../utils/daysOfWeek';
import { monthsOfYear } from '../utils/monthsOfYear';

interface Props {
    value?: Date | Date[];
}

function Calendar({ value }: Props) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year: number, month: number) => {
        return new Date(year, month, 1).getDay();
    };

    const renderCells = () => {
        const today = new Date();
        const month = selectedDate.getMonth();
        const year = selectedDate.getFullYear();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = getFirstDayOfMonth(year, month);

        let currentDay = 1;
        let c: boolean | undefined = undefined;
        let b: boolean | undefined = undefined;
        const rows = [];
        for (let i = 0; i < 6; i++) {
            const cells = [];
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDayOfMonth) {
                    cells.push(<div key={j} className="days empty"></div>);
                } else if (currentDay > daysInMonth) {
                    break;
                } else {
                    const date = new Date(year, month, currentDay);
                    const isToday = date.toDateString() === today.toDateString();
                    if (value instanceof Date) {
                        c = value && (typeof value === 'object') && (date.toDateString() === value.toDateString());
                    } else if (Array.isArray(value)) {
                        b = value?.some(element => date.toDateString() === element.toDateString());
                    }

                    cells.push(
                        <div
                            key={j}
                            onClick={() => setSelectedDate(date)}
                            className={`
                                  days 
                                  ${isToday && c === undefined && b === undefined && isToday ? "today" : undefined}
                                  ${c ? "today" : undefined}
                                  ${b ? "today" : undefined}
                                  `}
                        >
                            {currentDay}
                        </div>
                    );
                    currentDay++;
                }
            }
            rows.push(cells);
        }
        return rows;
    };

    function prevMonth() {
        const prevMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1);
        setSelectedDate(prevMonth);
    }

    function nextMonth() {
        const nextMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1);
        setSelectedDate(nextMonth);
    }

    return (
        <div className='calendar-container'>
            <div className='calendar-header'>
                <div className='month-year'>
                    <span>{monthsOfYear[selectedDate.getMonth()]} {selectedDate.getFullYear()}</span>
                    <div className='calendar-controls'>
                        <button onClick={() => prevMonth()} className='button-controls'>
                            <div className='icon-arrow-left'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </div>
                        </button>
                        <button onClick={() => nextMonth()} className='button-controls'>
                            <div className="icon-arrow-right">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="calendar-week">
            {daysOfWeek.map((element, i) => (
                    <div key={i} className="daysof-week">{element}</div>
                ))}
            </div>
            <div className='calendar-body'>
                {renderCells()}
            </div>
        </div>
    );
}

export default Calendar;