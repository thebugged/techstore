
![Techstore](screenshot.png)

<details>
  <summary>Click to show images</summary>
  <img src="ShowCase/1.png" alt="Image 1">
    <img src="ShowCase/2.png" alt="Image 2">
    <img src="ShowCase/3.png" alt="Image 3">
    <img src="ShowCase/4.png" alt="Image 4">
    <img src="ShowCase/5.png" alt="Image 5">
    <img src="ShowCase/6.png" alt="Image 6">
    <img src="ShowCase/7.png" alt="Image 7">
    <img src="ShowCase/8.png" alt="Image 8">
    <img src="ShowCase/9.png" alt="Image 9">
    <img src="ShowCase/10.png" alt="Image 10">
    <img src="ShowCase/11.png" alt="Image 11">
    <img src="ShowCase/12.png" alt="Image 12">
    <img src="ShowCase/13.png" alt="Image 13">
    <img src="ShowCase/14.png" alt="Image 14">
    <img src="ShowCase/15.png" alt="Image 15">
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
