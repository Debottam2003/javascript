import json
file = open("json1.json", "r")
data = json.load(file)
for i in data:
  print(i ,":", data[i])
file.close()
