import React from "react"
import { useTranslation } from "react-i18next"
import TableItem from "./tableItem"
import "react-datepicker/dist/react-datepicker.css"
import { StyledTable, Thead, Tbody } from "../commonStyles/table"
import { Font16 } from "../commonStyles/font"

const Table = ({ list, onHandleSchedule, onClickPricing }) => {
  const { t } = useTranslation()

  return list.length > 0 ? (
    <StyledTable>
      <Thead>
        <tr>
          <th>{t("DATE")}</th>
          <th>{t("CAMPAIGNS")}</th>
          <th>{t("VIEW")}</th>
          <th>{t("ACTIONS")}</th>
        </tr>
      </Thead>
      <Tbody>
        {list.map((item) => (
          <TableItem
            item={item}
            onClickPricing={onClickPricing}
            updateSchedule={(date) => onHandleSchedule(item.id, date)}
          />
        ))}
      </Tbody>
    </StyledTable>
  ) : (
    <Font16>{t("DATA_NOT_FOUND")}</Font16>
  )
}

export default Table
