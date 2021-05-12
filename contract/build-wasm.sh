wasm-pack build

if [ -d "../web/src/generated" ] 
then
    if [ -d "../web/src/generated/contract" ] 
    then
        rm -r ../web/src/generated/contract
    fi
else
    mkdir ../web/src/generated
fi

mv pkg ../web/src/generated/contract