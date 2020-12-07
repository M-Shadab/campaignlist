import React from "react"
import { useTranslation } from "react-i18next"
import {
  ModalWrapper,
  Modal,
  PlanWrapper,
  CloseButtonWrapper,
} from "../commonStyles/priceModal"
import { H1, Font16 } from "../commonStyles/font"
import { Button } from "../commonStyles/button"
import avatar from "../assets/svgs/avatar.svg"

const PriceModal = ({ onClose }) => {
  const { t } = useTranslation()

  return (
    <ModalWrapper>
      <Modal>
        <img src={avatar} alt="avatar" />
        <H1>{t("PRICING")}</H1>
        <PlanWrapper>
          <Font16>{t("1_WEEk_1_MONTH")}</Font16>
          <Font16 fontWeight="bold">$ 100.00</Font16>
        </PlanWrapper>
        <PlanWrapper>
          <Font16>{t("6_MONTH")}</Font16>
          <Font16 fontWeight="bold">$ 500.00</Font16>
        </PlanWrapper>
        <PlanWrapper>
          <Font16>{t("1_YEAR")}</Font16>
          <Font16 fontWeight="bold">$ 900.00</Font16>
        </PlanWrapper>
        <CloseButtonWrapper>
          <Button onClick={onClose}>{t("CLOSE")}</Button>
        </CloseButtonWrapper>
      </Modal>
    </ModalWrapper>
  )
}

export default PriceModal
