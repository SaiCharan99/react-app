pipeline {
    agent any

    tools {
       nodejs "node"
    }

    stages {
		stage('Hello'){
			steps {
				echo "hello world"
				sh 'npm --version'
			}
		}
		
        stage('Git') {
            steps {
               git 'https://github.com/adithnaveen/react-jenkins-docker.git';  
            }
        }
		
		stage('Build') {
			steps {
				sh 'npm install'
				sh 'npm start'
			}
		}
    }
}
