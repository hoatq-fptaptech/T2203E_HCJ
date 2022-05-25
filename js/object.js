var obj  = {
    name: "Nguyen Van An",
    age: 18,
    telephone:["019181","838282"],
    dateOfBirth:"25/5/1999",
    girlFriend:{
        name:"Nguyễn Thị Hà",
        age: 16,
        eat: function () {
            console.log("Eat...");
        }
    },
    run: function () {
        console.log(this.name+" running...");
    }
}
obj.name = "Nguyễn Thị Hà";
console.log(obj.name);
obj.run();
obj.name = "Nguyễn Đức Lân";
obj.run();
obj.girlFriend.eat();
//obj.age khac obj.girlFriend.age
console.log(obj.telephone[0]);

var sv = {
    name:"Nguyen Van An",
    age: 18,
    address:"8 Ton That Thuyet, Nam Tu Liem, HN",
    telephone:"0987654321",
    myClass:{
        className:"T2203E",
        room:"B16"
    },
    myGroup:{
        groupName: "Nhom 1",
        members:[
            {
                name:"Nguyen Van B",
                telephone:"0988777666"
            },
            {
                name:"Nguyen Van C",
                telephone: "09666777888"
            }
        ]
    }
};

console.log("danh sach thanh vien:");

for(var i=0;i< sv.myGroup.members.length;i++){
    console.log(sv.myGroup.members[i].name);
    console.log(sv.myGroup.members[i].telephone);
}