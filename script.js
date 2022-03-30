
  let api = new XMLHttpRequest();

  function buscar(){

    $("#tabela tbody tr").remove();
      api.onreadystatechange = () =>{
          if(api.readyState == 4 && api.status == 200){
            
            let cep = document.getElementById("cep").value

                document.getElementById('cep').value = ""
            
            let xmlcep = api.responseText
            console.log(xmlcep)
             let objJSONcep = JSON.parse(xmlcep)

                            if ( objJSONcep === 'CONSULTAFEITA'){
                                alert('CONSULTA FEITA');}


                            else if ( objJSONcep === 'VAZIO'){
                                alert('É OBRIGATÓRIO A INFORMAÇÃO DE UM CEP VALIDO');}

                            else{
                            let cepobj = objJSONcep.cep
                            let logradouroobj = objJSONcep.logradouro
                            let bairroobj = objJSONcep.bairro
                            let localidadeobj = objJSONcep.localidade
                            let ufobj = objJSONcep.uf


                            let tr = document.createElement('tr')
                            let td = document.createElement('td')
                                td.innerHTML = cepobj
            
                            let tdl = document.createElement('td')
                                tdl.innerHTML = logradouroobj
            
                            let tdb = document.createElement('td')
                                tdb.innerHTML = bairroobj

                            let tdlocalidade = document.createElement('td')
                                tdlocalidade.innerHTML = localidadeobj
                            
                            let tduf = document.createElement('td')
                            tduf.innerHTML = ufobj
                                        
                                        tr.appendChild(td)
                                        tr.appendChild(tdl)
                                        tr.appendChild(tdb)
                                        tr.appendChild(tdlocalidade)
                                        tr.appendChild(tduf)

                                        document.getElementById('tbody').appendChild(tr)}
          }
      }
      api.open('GET', 'http://10.10.0.17/busca/consulta.php?q='+cep.value)
      api.send()
  }
