import React from "react"
import { useTranslation } from "react-i18next"
import { Wrapper, TabWrapper } from "../styles/navBar"
import { H1, Font16 } from "../../../commonStyles/font"

const NavBar = ({ activeTab, onClickTab }) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <H1>{t("MANAGE_CAMPAIGNS")}</H1>
      <TabWrapper>
        <Font16
          borderBottom={activeTab === "upcoming"}
          fontWeight={activeTab === "upcoming" && "bold"}
          onClick={() => onClickTab("upcoming")}
        >
          {t("UPCOMING_CAMPAIGNS")}
        </Font16>
        <Font16
          borderBottom={activeTab === "live"}
          fontWeight={activeTab === "live" && "bold"}
          onClick={() => onClickTab("live")}
        >
          {t("LIVE_CAMPAIGNS")}
        </Font16>
        <Font16
          borderBottom={activeTab === "past"}
          fontWeight={activeTab === "past" && "bold"}
          onClick={() => onClickTab("past")}
        >
          {t("PAST_CAMPAIGNS")}
        </Font16>
      </TabWrapper>
    </Wrapper>
  )
}
export default NavBar
