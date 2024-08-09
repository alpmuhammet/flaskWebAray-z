from flask import Flask, render_template, request, redirect, url_for, session, flash

app = Flask(__name__, static_folder='static')
app.secret_key = 'your_secret_key'

# Mock user database
users = {
    'testuser': 'password123'
}

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username in users and users[username] == password:
            session['username'] = username
            return redirect(url_for('home'))
        else:
            flash('Kullanıcı adı veya şifre yanlış.')
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username not in users:
            users[username] = password
            session['username'] = username
            return redirect(url_for('home'))
        else:
            flash('Bu kullanıcı adı zaten mevcut.')
    return render_template('register.html')

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('login'))
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/data_management')
def data_management():
    return render_template('data_management.html')

@app.route('/reports')
def reports():
    return render_template('reports.html')

if __name__ == '__main__':
    app.run(debug=True)
