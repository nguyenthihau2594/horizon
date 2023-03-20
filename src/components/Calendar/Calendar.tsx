import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./Calendar.scss";
import { useEffect, useRef, useState } from "react";
import Button  from "components/Button/Button";


function Calendar() {
  const calendarRef = useRef<FullCalendar>(null);
  const [isShowPopup, setShowPopup] = useState(false);
  const [isShowYPopup, setShowYPopup] = useState(false);
  const [date, setDate] = useState(new Date());
  const [year,setYear] = useState(date.getFullYear())
  const [month,setMonth] = useState(date.getMonth())

  const openMonth = () =>{
    setShowPopup(true);
  }
  const openYear = () =>{
    setShowYPopup(true);
  }

  const handleMonthClick = (month: number) => {
    setDate(new Date(year, month, 1));
    setMonth(month)
    setShowPopup(false);
  }

  const handleYearSubmit = () => {
    setDate(new Date(year, month, 1));
    setYear(year)
    setShowYPopup(false);
  }

  const  handleClickLayer = (e : any) =>{
    if(e.target === e.currentTarget){
      setShowYPopup(false);
      setShowPopup(false);
    }
  }

  useEffect(() => {
    if(!calendarRef.current) return;
    calendarRef.current.getApi().gotoDate(date);
  }, [date])

  return (
    <div className="calendar">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        events={[
          {
            start: "2023-03-21",
            end: "2023-03-24"
          },
        ]}
        locale="en"
        headerToolbar={{
          left: undefined,
          center: "Month,Year",
          end: undefined
        }}
        customButtons={{
          Month: {
            text: date.toLocaleString('default', { month: 'long' }),
            click: function () {
              openMonth();
            }
          },
          Year: {
            text: date.getFullYear().toString(),
            click: function () {
              openYear();
            }
          }
        }}
        height={313}
        viewClassNames="calendar_content"
        dayCellClassNames="calendar_td"
        dayHeaderClassNames="calendar_th"
      />
      {isShowPopup && <div className="popup_month" onClick={e => {handleClickLayer(e)}}>
        <div className="popup_content">
          <strong className="title">Please select the month of the year</strong>
          <ul className="month_list">
            <li className="month_item"><button type="button" className={date.getMonth() === 0 ? 'btn_month is_active' : 'btn_month'} onClick={() => {handleMonthClick(0)}}>January</button></li>
            <li className="month_item"><button type="button" className={date.getMonth() === 1 ? 'btn_month is_active' : 'btn_month'} onClick={() => {handleMonthClick(1)}}>February</button></li>
            <li className="month_item"><button type="button" className={date.getMonth() === 2 ? 'btn_month is_active' : 'btn_month'} onClick={() => {handleMonthClick(2)}}>March</button></li>
            <li className="month_item"><button type="button" className={date.getMonth() === 3 ? 'btn_month is_active' : 'btn_month'} onClick={() => {handleMonthClick(3)}}>April</button></li>
            <li className="month_item"><button type="button" className={date.getMonth() === 4 ? 'btn_month is_active' : 'btn_month'} onClick={() => {handleMonthClick(4)}}>May</button></li>
            <li className="month_item"><button type="button" className={date.getMonth() === 5 ? 'btn_month is_active' : 'btn_month'} onClick={() => {handleMonthClick(5)}}>June</button></li>
            <li className="month_item"><button type="button" className={date.getMonth() === 6 ? 'btn_month is_active' : 'btn_month'} onClick={() => {handleMonthClick(6)}}>July</button></li>
            <li className="month_item"><button type="button" className={date.getMonth() === 7 ? 'btn_month is_active' : 'btn_month'} onClick={() => {handleMonthClick(7)}}>August</button></li>
            <li className="month_item"><button type="button" className={date.getMonth() === 8 ? 'btn_month is_active' : 'btn_month'} onClick={() => {handleMonthClick(8)}}>September</button></li>
            <li className="month_item"><button type="button" className={date.getMonth() === 9 ? 'btn_month is_active' : 'btn_month'} onClick={() => {handleMonthClick(9)}}>October</button></li>
            <li className="month_item"><button type="button" className={date.getMonth() === 10 ? 'btn_month is_active' : 'btn_month'} onClick={() => {handleMonthClick(10)}}>November</button></li>
            <li className="month_item"><button type="button" className={date.getMonth() === 11 ? 'btn_month is_active' : 'btn_month'} onClick={() => {handleMonthClick(11)}}>December</button></li>
          </ul>
        </div>
      </div>}
      {isShowYPopup && <div className="popup_year" onClick={e => {handleClickLayer(e)}}>
        <div className="popup_content">
          <strong className="title">Enter the year in the input box</strong>
          <input type="number" className="inp_text" defaultValue={year} onChange={e => setYear(Number(e.target.value))} />
          <Button className="btn_submit" onClick={() => handleYearSubmit()}>Accept</Button>
        </div>
      </div>}
    </div>
  );
}

export default Calendar;
