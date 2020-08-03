#rm *.pem

# 1. Generate CA's private key and self-signed certificate
#openssl req -x509 -newkey rsa:4096 -days 365 -nodes -keyout ca-key.pem -out ca-cert.pem -subj "/C=PG/ST=Morobe/L=Lae/O=Unitech/OU=NICTC/CN=localhost/emailAddress=anapitalai@gmail.com"

#echo "CA's self-signed certificate"
#openssl x509 -in ca-cert.pem -noout -text

# 2. Generate web server's private key and certificate signing request (CSR)
#openssl req -newkey rsa:4096 -nodes -keyout server-key.pem -out server-req.pem -subj "/C=PG/ST=Morobe/L=Lae/O=Unitech/OU=NICTC/CN=localhost/emailAddress=anapitalai@gmail.com"

# 3. Use CA's private key to sign web server's CSR and get back the signed certificate
#openssl x509 -req -in server-req.pem -days 60 -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem -extfile server-ext.cnf

##echo "Server's signed certificate"
#openssl x509 -in server-cert.pem -noout -text




#create a key
openssl genrsa -out sly-key.pem

#create a certificate request
openssl req -new -sha256 -key sly-key.pem -out sly-csr.pem
##
openssl x509 -req -in sly-csr.pem -signkey sly-key.pem -out sly-cert.pem




