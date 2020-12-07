import React, { useRef } from "react"
import { useTranslation } from "react-i18next"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { getMonthLabel } from "../utils/getMonthLabel"
import { ActionContainer, CalendarWrapper } from "../commonStyles/table"
import { Font16, Font14 } from "../commonStyles/font"
import avatar from "../assets/svgs/avatar.svg"
import calendar from "../assets/svgs/calendar.svg"
import stats from "../assets/svgs/stats.svg"
import file from "../assets/svgs/file.svg"

export default function TableItem({ item, onClickPricing, updateSchedule }) {
  const calendarRef = useRef()
  const { t } = useTranslation()

  const date = new Date(item.createdOn)

  const createdOn = `${getMonthLabel(
    date.getMonth()
  )} ${date.getFullYear()}, ${date.getDate().toString().padStart(2, 0)}`

  const daysGap = parseInt(
    (item.createdOn - Date.now()) / (1000 * 60 * 60 * 24)
  )

  const handleCalendar = (id) => {
    if (calendarRef.current) {
      calendarRef.current.input.click()
    }
  }

  return (
    <tr key={item.id}>
      <td>
        <Font16 color="#2B416C">{createdOn}</Font16>
        <Font14 color="#7788A3">
          {daysGap > 0 ? `${daysGap} Days Ahead` : `${-daysGap} Days Ago`}
        </Font14>
      </td>
      <td>
        <img src={avatar} alt="logo" />
        <div>
          <Font16 color="#556789">{item.name}</Font16>
          <Font14 color="#9CA2B7">{item.region}</Font14>
        </div>
      </td>
      <td>
        <Font14 onClick={onClickPricing}>View Pricing</Font14>
      </td>
      <td>
        <ActionContainer>
          <img src={file} alt="file" />
          <Font14>{t("CSV")}</Font14>
        </ActionContainer>
        <ActionContainer>
          <img src={stats} alt="stats" />
          <Font14>{"REPORTS"}</Font14>
        </ActionContainer>
        <CalendarWrapper>
          <img src={calendar} alt="calendar" />
          <Font14 onClick={() => handleCalendar(item.id)}>
            {t("SCHEDULE_AGAIN")}
          </Font14>
          <DatePicker
            ref={calendarRef}
            selected={date}
            onChange={updateSchedule}
          />
        </CalendarWrapper>
      </td>
    </tr>
  )
}
