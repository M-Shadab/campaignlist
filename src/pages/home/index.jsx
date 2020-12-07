import React, { useState, Suspense } from "react"
import { response } from "../../data"
import NavBar from "./components/navBar"
import { HomeWrapper } from "./styles/index"
import Table from "../../common/table"
import PriceModal from "../../common/priceModal"

const Home = () => {
  const [list, setList] = useState(response.data)
  const [showPricing, setShowPricing] = useState(false)
  const [activeTab, setActiveTab] = useState("upcoming")

  const handleSchedule = (id, date) => {
    const elementIndex = list.findIndex((element) => element.id === id)
    const newList = [...list]

    newList[elementIndex] = {
      ...newList[elementIndex],
      createdOn: new Date(date).getTime(),
    }

    setList(newList)
  }

  const renderTable = () => {
    let filteredList = []

    filteredList = list.filter((item) => {
      if (activeTab === "upcoming") {
        return item.createdOn > Date.now() && item
      }
      if (activeTab === "live") {
        return item.createdOn === Date.now() && item
      }
      // if (activeTab === "past")
      return item.createdOn < Date.now() && item
    })

    return (
      <Table
        list={filteredList}
        onHandleSchedule={handleSchedule}
        onClickPricing={() => setShowPricing(true)}
      />
    )
  }

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <HomeWrapper>
        <NavBar activeTab={activeTab} onClickTab={(tab) => setActiveTab(tab)} />
        {renderTable()}
      </HomeWrapper>
      {showPricing && <PriceModal onClose={() => setShowPricing(false)} />}
    </Suspense>
  )
}

export default Home
