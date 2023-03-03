const yargs = require("yargs")
const data = require ("./data")


yargs.command({
    command : "add",
    describe: " add new ",
    builder: {
        firstName : {
            describe: "First name ",
            demandOption: true,
            type: "string"
        },
        lastName : {
            describe: " Last name ",
            demandOption: true,
            type: "string"
        },
        State: {
            describe: " State",
            demandOption: true,
            type: "string"
        },
        id : {
                describe : "National ID",
                demandOption : true,
                type:Number
             },
             Marital : {
            describe : "Marital Status",
            demandOption : true,
            type:"string"
         }
    },
    handler: (personData)=> {
        data.addData(personData.id,personData.firstName , personData.lastName , personData.city , personData.age)
    }
 })


 yargs.command({
    command : "delete",
    describe: " to delete a person",
    builder : {
        id : {
            describe : "id of person",
            demandOption : true,
            type:Number
         }
    },
    handler: (personData)=> {
        data.deleteData(personData.id)
    }
 })


 yargs.command ({
    command : "read",
    describe : "to read data of person",
    builder : {
        id : {
            describe : "id of person",
            demandOption : true,
            type:"string"
         }
    },
    handler : (personData)=> {
        data.readData (personData.id)
    }
 })


 yargs.command ({
    command :"list",
    describe : "show all data in the database",
    handler : ()=>{
        data.showData()
    }
 });

yargs.command({
  command: "calculate",
  describe: "Calculate total and average grades",
  handler: () => {
    const total = data.getTotal();
    const avg = data.getAverage();
    console.log(`Total: ${total}\nAverage: ${avg}`);
    data.saveStudentDataToFile();
  },
});
 

yargs.parse() 

