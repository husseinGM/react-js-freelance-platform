# My Technology
### frontend chanllenge react js
react app , that connect freelancer (developer) with customer that need software


### Tools:
1. react hook form
2. create end point from json file, to make data as API
3. Tailwind css
4. Animation On Scroll (AOS)

### note about json
you need to create endpoint to json file, follow this steps:
1. first step is to install json-server library (npm i json-server) to create endpoint
2. second step is to watch this json file in any port except (3000):
  npx json-server -w data/freelancer.json -p 5000

### note about hook
iam created custom hook called useFetch, iam not used in this app because i need to practice AyncThunk, but you can use it:
  1. import it from custom hook folder
  2. destructing variables {data, pending, error} = useFetch(url)
  3. add endpoint you created by watching json file in useFetch, because it receive one paramter, this parameter is URL

