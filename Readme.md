
![techstore](https://github.com/thebugged/techstore/assets/74977495/9f406141-aa0c-42d6-bad6-03c989e872b5)

![Techstore](screenshot.png)

<details>
  <summary>Images</summary>
  <p float="left">
    <img src="images/1.png" width="30%">
    <img src="images/2.png" width="30%">
    <img src="images/3.png" width="30%">
  </p>
  <p float="left">
    <img src="images/4.png" width="30%">
    <img src="images/5.png" width="30%">
    <img src="images/6.png" width="30%">
  </p>
  <p float="left">
    <img src="images/7.png" width="30%">
    <img src="images/8.png" width="30%">
    <img src="images/9.png" width="30%">
  </p>
  <p float="left">
    <img src="images/10.png" width="30%">
    <img src="images/11.png" width="30%">
    <img src="images/12.png" width="30%">
  </p>
  <p float="left">
    <img src="images/13.png" width="30%">
    <img src="images/14.png" width="30%">
    <img src="images/15.png" width="30%">
  </p>
</details>

## 
# Techstore
This is a fully functional web app for tech products made using React(frontend) and Django(backend).


## Installation


### Prerequisites
- Python (3.x)
- Node.js

### Setting up the Environment

#### Windows
1. Clone the repository:
```shell
git clone https://github.com/thebugged/techstore.git
```

2. Create a virtual environment: 
```shell
python -m venv env
```

3. Activate the virtual environment:
```shell
env\Scripts\activate
```

4. Install the Python dependencies:
```shell
pip install -r requirements.txt
```

5. Install the Node.js dependencies:
```shell
cd frontend
npm install
```
or 
```shell
npm install --force
```


#### macOS/Linux
1. Clone the repository:
```shell
git clone https://github.com/thebugged/techstore.git
```

2. Create a virtual environment: 
```shell
python -m venv env
```

3. Activate the virtual environment:
```shell
source env/bin/activate
```

4. Install the Python dependencies:
```shell
pip install -r requirements.txt
```

5. Install the Node.js dependencies:
```shell
cd frontend
npm install
```
or 
```shell
npm install --force
```



## Running the App
The frontend and backend is not combined as usual, so you would need to run the sevrers seperately.

1. From the backend directory run the Django development server:
```shell
cd backend
python manage.py runserver
```

The app will be accessible at http://127.0.0.1:8000/.

2. From the frontend directory run the React development server:
```shell
cd frontend
npm start
```

The app will be accessible at http://localhost:3000/.
