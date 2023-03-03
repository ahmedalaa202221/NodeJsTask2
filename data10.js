
  const fs = require("fs")
const allData = require("./allData")

  const addPerson = (fname , lname , State , Marital , id) => {
       const allData = loadData()

        const duplicatedData = allData.filter ((obj) => {
            return obj.id === id
        })
        console.log(duplicatedData)

        if (duplicatedData.length == 0) {
        allData.push ({
            id : id,
            fname : fname,
            lname,
            State : State,
            Marital : Marital
        })

        saveAllData(allData)
    } else {
        console.log("Stop Ya3am El7ag , Salla7 El-Code Beta3ak")
    }
  }

  const loadData = () => {

    try {
        const dataJson = fs.readFileSync ("data10.json").toString()
        return JSON.parse (dataJson)
    } catch {
            return []
    }

  }

  const saveAllData = (allData) => {
      const saveAllDataJson = JSON.stringify(allData) 
      fs.writeFileSync("data10.json" , saveAllDataJson)
  }

 const deleteData = (id) => {
        const allData = loadData()

        const dataToKeep = allData.filter ((obj) => {
             return obj.id !== id 
        })
        // console.log(dataToKeep)
        saveAllData(dataToKeep)
 }


      
        const readData = (id) => {
            const allData = loadData()

            const itemNeeded = allData.find((obj) => {
                 return obj.id == id 
            })
            console.log(itemNeeded)

        }


    const listData = () => {
        const allData = loadData()

        allData.forEach ((obj) => {
            console.log(obj.fname , obj.lname)
        })
    }
     

module.exports = {
    addPerson,
    deleteData, 
    readData,
    listData
}