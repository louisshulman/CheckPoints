class Task:
    def __init__(self, name):
        self.name = name
        self.complete = False
        self.guidance = ""
    
    def change_status(self, status):
        self.complete = status
    
    def __repr__(self):
        return self.name

class CheckPoint:
    def __init__(self, name, bar=0, unit="seconds", guidance="none"):
        self.name = name 
        self.goOn = False
        self.goBack = False
        self.bar = bar
        self.measure = 0
        self.worst = 0
        self.unit = unit
        self.guidance = guidance
        self.attempts = 0
        self.Tasks = []

    def __repr__(self):
        return self.name
    
    def add_Tasks(self, TaskName):
        newTask = Task(TaskName)
        self.Tasks.append(newTask)

    def display_Tasks(self):
        for i in range(0, len(self.Tasks)):
            print(f"\t\t\t{self.Tasks[i].name}")

class SubSkill:
    def __init__(self, name):
        self.name = name
        self.CheckPoints = []
        self.description = ""

    def __str__(self):
        return self.name
    
    def __repr__(self):
        return self.name

    def add_CheckPoint(self, name, bar=0):
        newPoint = CheckPoint(name)
        newPoint.bar = bar
        self.CheckPoints.append(newPoint)
        return

    def display_CheckPoints(self):
        for i in range(0, len(self.CheckPoints)):
            print(f"\t\t{self.CheckPoints[i].name}")
            self.CheckPoints[i].display_Tasks()
    
class Skill():
    def __init__(self, name):
        self.name = name
        self.SubSkills = []
    
    def display_all(self):
        print(self.name)
        for i in range(0, len(self.SubSkills)):
            print(f"\t{self.SubSkills[i]}")
            self.SubSkills[i].display_CheckPoints()                

    def add_SubSkill(self, newSubSkill):
        tempSkill = SubSkill(newSubSkill)
        self.SubSkills.append(tempSkill)


mySkill = Skill("Calisthenics")
mySkill.add_SubSkill("Handstands")
mySkill.add_SubSkill("Pull-Ups")
mySkill.add_SubSkill("Push-Ups")
mySkill.SubSkills[0].add_CheckPoint("5 Second Hold")
mySkill.SubSkills[0].add_CheckPoint("10 Second Hold")
mySkill.SubSkills[0].add_CheckPoint("20 Second Hold")
mySkill.SubSkills[0].CheckPoints[0].add_Tasks("Do 5 Wall Handstands")
mySkill.SubSkills[0].CheckPoints[0].add_Tasks("Do 5 More Wall Handstands")
mySkill.SubSkills[0].CheckPoints[0].add_Tasks("Do 5 More Wall Handstands")
mySkill.SubSkills[1].add_CheckPoint("10 Pullups")
mySkill.SubSkills[1].CheckPoints[0].add_Tasks("Do 5X5 Pullups")
mySkill.SubSkills[1].add_CheckPoint("Muscle-Up")
mySkill.SubSkills[1].CheckPoints[1].add_Tasks("Do 10 Jumping Muscle-Ups")
mySkill.display_all()