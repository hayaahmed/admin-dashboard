<template>
    <div class="profile bg-gray-100" >
       <sideBarVue></sideBarVue>
       <div class="ProfileTitle">
        <h1 class=" text-gray-700 text-left m-3 ml-10 font-bold capitalize">profile</h1> 
       </div>
       <div class="profile-content ">
            <div class="overView p-[20px] bg-white rounded-[10px] flex items-center">
                <div class="img-box">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhUYGBgaGBkYHBoaGhoYGBoYGhgZGhgYGBgcIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAPsAyQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQYAB//EAD4QAAEDAgMFBAgGAQIHAQAAAAEAAhEDIQQSMQVBUWFxIoGRoQYTMlKxwdHhFUJikvDxghTSFjNTcqKy4iP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQACAgIDAQADAQAAAAAAAAAAAQIREiEDMUFRBBNhQv/aAAwDAQACEQMRAD8A7B9JCFNPwoFNImgLWAiFWthrJoMRGtQIxRQRKdAgrVGHEyrupBMKFqbUX1IRQxFa1AUeYxEDV4BWhIojKvZV4qJQAhWwwJQ2ULrRc1BLE7IcSKLACjAKimUDKVgkajSn3IFRiBNGY9iE8FanqVU0RwTsmjOZRuispwmX01QtQOj1QSguKK5L1EhgnuVJV3MUerQKjaARGheaERrVJsyMqqjtavPYmRQMOVsyG4QvByBlyrNKFKlADAV5QGvRGuQB55VWBS8qrCgAiq5qhrrqS5AFCFC9Ko5yZJ5xVQV6UMuQBcqrmrwcrEygAeVCexMQhvCAFXiyBmCYqBKPagRVz1XOoUSgDo2tRGtWPj/SChSpl4ex5jssa4Fzju09kcyud2f6bVM49cxnqzY+rBDm/qu45hy/oihJ7CXNFOmzvlQvXmVA5oc0hzSAQRcEHQgrxSNATyhJgtQnoJYMlezKHKhcmIIHqwfCo0BFEQgC4fK8HIOih1VA7DlyrmQQ9UzoFYxnVHOQi9Q6qgRcvQXPQ31EJz0CsYD0QVEkHqS9AWOGoqvqJT1ioXoHYeo9KVais96XegChddTKqVSUAfPqTyDM/wAladJgdY+PVZOHZFz3LQw7r3O6wXUzy467Ol9FvSE0B6uoCaZdY76ZOpA3t3wvoLHBwDmkEEAgi4IOhC+SNYOhneui9F9vGiRTfdhPewm8j9N5I71jON7R18PM1UZdHcFCcE05oIBFwbgi4I4goMLI7RKoEIgp11JLvpFBLQIOKs15VxTK81iAogvQ3FWqBAeUxMvnhQXoeZUzoEFc9Dc5VLlRzkCLZlJcIQoVSCmAUvUFyCQpBQBdyE4qSVUlIDxKoVeV6EDAkKMqNC9lQM+aUqhuP5om6bhHmqMLXAAjl5IjaMdB911WeUk/B6kZBPAI9N4OvC3gs2m8ieaeoCQoaLi7Ol9HduGgcjzNInvYZ1A4XuO/r3RYF8npviQfO67D0X2wTloPM27Dyb8cjp8ukcFnKPp28M/8s6bKquaiyoIWZ0i7qaGaZTkL0ICjNdTlJ1acLac1Ur0Q4JWS4mEqEpvEUC1KPCZLRUlVlQVUlMQQFQ9yFK9mQBMr0qJUoEelehTCgIGRkV2sS78RBsmGVZRQJosKanKoqVWtbmLgAN5MAdZSX4tQ/wCqz9wSpjyX04HCs0AvdaFDR066RygfNZWHrgGW2/tabHyZ38eZ3rpZ58Ul0MU6IdrrfXgqMlhi/wBuaM2WtEjv+kIL/aN77+s/dSmW0khppmbotF5aQQYIIIPAzYpdpg33osWJ6fNAf0+k7M2kyswPab6ObvafodQU2Xr5vsnHmjUDxMaOb7zd467xzC77D4lr2B7TIIndbkY0I4LGUcTt4uTJb7Gg9QXoBcql6g1Dl6qaiB6xVL0AXqOSFamEd70FzkEsTexBcE64ITmKrJoWVSjuYhuagVAyVZqgtC86ALlMReUpisSBpflxS+IxTW+0ZO5o1PcsuvWe8k2aOG/xVxiYz5K0h5mIObtaHyUYrHkCGEcC7UDoN55rCc8zeU02q2NwE2H871bjRgua7QrUDnSXuc4neSSft3IfqhwCdFxAb37z3cNFX1Lk7JxOTY7mn8NWIP8AL/z5rKY6E0wyLa8FVkYtPR0WHxbgInMN/Hp0RWEOzbrfO0rBw2KLeIjd/NFp0sU10SYM2+Pcpao1jNPTNGpRkfNDa6BB/nBQKpbIdeZuSidl1xcAQRvB5hKymvh77+a630YqRScJuHkxwlrfuuPEjotHAY31b2unskQ4cuPd9VMlaK4pKMrZ24xA0Xi9ZgqhwDmmQbgjQojMVuPisaO1SHS5QXoeZQXJDJc9DJUl6oXhAiVQlSHTwKhz4EkIAo56XfVHXoh4zHMFnGPCfBYuK2iCewI5u+i0jFswnyxj6aFbEcTlCQr7RGjLnSToOnFIOM3e4k8PoquqAeyFqoo5ZcrZc1BM3cTqfurUqx3tASpceKq9/EqqMlNoLUpS4nMI38kvUqNBkeaFUqpOrVVJGcpfA1XFu3OI70t/qHcT4lBe9BzKtE2xFj0Zr94We1yK2osFI9GXFZptrgwHbvFMYepkN7tO/hzWUyojsqRorTTMJQcXZrGrIiZEWO83m/NWo4l4dM6W4LMpVgOh3Jo1ADrmFoO8dUzN32bdLFyLi+8aeCnO1wkGCNRvCzWv3hWc4GJN9x3hTRbbaOq2NjsrCx2jTbiAb6cNVptrB12kHp8+C4rDbQLS0P6B3EfqW0yp+Zro6fA8VEom0eR1RvsxJAjcpFWVl0seDZzYPEXHWE/SbNwQQpcaNYzvouaiDUqmIRi0c0rXcGgk7kkOTaBnEhnbJ08+QCQxG1Xv0dkHAG/eUrWJeS5xvw3AcAhOLeK1UUc05yelpFnNHGURrGpY6ShF8KqMbrwaqsG4hAcQgurIFTEwmkKUkMvelauISlXESlnVEyLDvrID3oL3obnosIwsI96pnQS5RKWRvHj0IgqwKII93zKnKOHxWJ3NoqCiMqKzMo1ZPeQvBg4eaFZEnEIHorKsFVYwR7PmUQBvu/8Al9lorOaeNmjgd0AwbXkjrI3o+MwZBlpngR817ZhaBEESdM0p97mt1Ef5JNuxpRcTHpVCeyRruWzs6tlbldoDbp/JSrMWwkDJPPMfommFh0YT/mfohtjjGK3dmgH7wmsNiy24tPgkaDGj8hH+c/JMsLPcJ/y+yXYdPTNP/XAiSYPBY9bEF5OZ0AaDcPumsjdQw/u+yUJaQQGDxPxSSRUm32ylMMJPLjv4oGIxLBOUIjWTIyRHX4pCtTj8vmVaWzKTaWqBvxBQX1VZzR7vmUGoz9PmfqrOdtgn4hLPqIr2fpHn9UFzeQ8/qmCoG56o56I5vIef1Qy3kPP6qXZpHEo56pmRCP0jz+qpHIef1UuzaOIOVWUSOQ8/qogcPj9VOzVUQ2miCmjNYitYmkZSnQu2kjNoo7WIraapJGMpyfQs2mjihB0TDGR1V2G8p2RX09h2Rcr1ZpcddUYKS093FSaeULMpxYC62sFh8rROpuVXAYQuuATG/dK3sLswm7iI4C6UpGkIPwz6dMuNgtjB7N3u8AnadBjRAaPBGas3I3jx09gjhmgQFjbQ2dll7OpH0W+XIFS6SdFyimjk/WOCHVfOrU7tLAlkuaSW8I0vxWb6wrVU9nLK1pg30ggOpJkrwaqsycRJ9BLvw61DTQ3MTslxMd1BUdSWo+mgPpp2TRnOpoZYnnU0JzEDViZYqZEw5qrlSaNFJlmo7GINM8wmB3+BWeSN3wsu0cEzQbuhDayBJ+SM1/Md5+SMkC4GiXU/kr0qA1le9ZEcVBr6/CDPwRkH6dh7KWU3OIaxpJ3BoJPgEv60LpfRXBOc41j7IlrdbneRGo3f0k5Uhx4XJ0aWx9nCmwZwMxuZFxy1IWkBOgVm05MQU02iBeAsXKzrjxpKkBZQMc+q96l3BNyqPcOKWReCFHUTyQ30005wVBURkL9aFmYYk30SGN9HWGXMOU8BMec/JbGdWFVqeTXQnxRapnDYzZz2HRzhxDTCSzngu9xAaZIue9Yu1MC17gXNLTESFpHk+nPP8etxObe6VQvTGKwjmHsyRz/pIVK3Gx8FakYPifoUlDeAh5+CjNKeQfqZR7UBwCO4HgUB45HyI8QlmUuAE9iHlRKNFznhoY93ENEmOIsmvw3lV8Kf+9L9iNI/jOjzdmtaJfWYx5HsgZonc4gW7gUu0NJLS8ucN0DL4ggFCx2Mw1ZrstJzH65mad7dCs6jT8uI+iwjfp2SpdGw6m1ou49Zp5fDMShOe7QOsOTWoDDyHcAvMqRcG6tEMbpVWH23EKz3tHskec96Xc+ea8Du+yZLQzTqEkAch4r6xsSm5mHpNc4Ehg0534c1x/obsMud66owFkSzMdXSIcG8BBufNdw56znK9GvHCtsJYaKpdzVC9Dc5ZmgQu6qrnc/JDLz/AAoZcmILnaOPiqPIOjo6oFR6CaiADvqEWBBUNq8Qgvqt9w9SbeSA/FsFonoT/CmIddWEfwJd9ZpGk96TfiuQS78Ze4KdEthMTSB/Lryn4LHxOzpk5W27rLRdijwPj8lDqrT+qddfmqTaIlFM5OqyJ0I6iUuwgmA15dwBAXQY7ZjT2gIHSR3QsfG7Obqwun/tcPNXkmQotPotTwdVxswtbrNQti0SIJg2Wg6uwsBqUYixLy4uMaZHNMaRYSube/Es3y3WJmOfEHml2bQqiQZgkyBBF9ezos3bZvHFKhwbVYx5bTzMbMg2zTwJ1437k3+Pu/67v3H6LmMTOb2co3CIEa6bu5ClOkK2dZgsBQqPbTDns/MT6wOhoFwLAXtcrZ/4fwZcP/3fO9udh8y2VxtOk4TkBzEZTqZGseSkU6osezO4gN8ZKhp+MtNeo6nF7ApOe71NUhjWBzwQXuGsBkQHSAdTbmox2zsMB6tmYviQ+SYMWa8aEG126c1kbJxlWg2oYzZwInS1rgC4vySWJrVHmHO5lre/jcjqULL6DxroJmItcRYze/VbPoxhG167GOYXMALnxYBoBjMRxdl04rOwFWnTcXVWOfYZWkEguk3cBrpA11Xc4baL2sa5rKdMmDlMMYWg7w1pLTB7lUpVomML2dY3QDdEAboVHOQKWLY8ZmPa4ciDHVQ/FNFyfIn4LM0GEIulJu2qwtc5pzRqBblvgBeobRY8dmJ4SLdTolYYth31HcJS1bFlrXOcx3ZBMWJMCYAn4qpxJc6P/Uz8FGJfVy9im53cTH1VCZjYP0mFWMuHrAZoJLQA3nLiJFt109WxnCPNZmIxT5IOo3Gx8NyC6pIu7++auiMht+MeIIuM1wZIywd3WLSFR1WeXQR4XPxKzNq7RZSZmMmSABpJO6TwgpZm2GujsOmYjM0ies8UY+ictUbQqH3lWpUSNPEE6sLRE3LTfuKs951sOv0VCNTB4/DNBbWdDptLi2GxqNx3+Cyj6QUHVctJzyJgEtBvOoIMxzIQsTQY8guYxx5gGPFSykxkhoA5gWKmh5aqjaOOc4QXW8PFK47CPe3s1Gg8JEeKHg8O+qSGMLyBe4gcLnf9EWpsfER/yj07PwJlLSHtnLkPYc4ZnIM3aTbfE2ngt1j2VmNfkJDgB2ojNckid30KJQpF/ZecrGm4Ahzt+XkNZKcdM9nI1gAAbE5gBe35QI5JORcYnK43ZrQ/ODni5pOkG2kH8w5Sqeur+4z9o+qf2w8vflhxAEZg2ATN8ptFtLFB/wBNR9+t+z/4SsdISw2NbRaMvbeZPNvBvEm5QsTtlzhDwCBFryDyd/az9oUwXuLbMJlo4A/DRCZQHGeW/pvTUU9sTk1pDkzENyjkbbtSBJOk/dM4fEuZ001EQeswfp0QGvLYANj72nERG/Tf1WvsrA5gHkAzeYDgIPCTckWKpuiYq2C2S9znhzWPeJkNyue3Nq12moN+q0MdtchuVwh4MRBzAfELVwYbM+0G/nzdkEGYA5Qo9JKLXsc8RnaC4OkQ4CeyZ1NyR4b1ndvZo41HRjYL0ie2o2G9mQHSI7MjMba2B0XQbQ2ywsLhe9hAJDYmSNxO8LiqOK3EtGbeWmRwiIHl8Lm9YKhLWXzEgSQMxkDTpA0VNExkdFsnFPr1A0MlokxlAaALSb23ieic2zs55yDK5rC7M91NwzAE5i2PaiwG+JOiHsbaFOi3IA1z9XvaIzagAcWiCB90HHekTy4sZGXfYDfdoWV70a1rZ1WAw1KkwZGFgdEyIeeGdx7U9TvVq2OYw3DbWmwga2PyXI4HbD6ldlOJGSXGT2AD7d9Ru3nTmtfbuwHVWdioA9plplzRfVpBEOHC9uOqfuxeaFttbUoPIAkP0D4JneA7kdAd1lmOqhvtEC28gdQJ/l1i4rZuKoy57XmDm7Ia+CB7Tg0kgX4gad2e2qT2g/f+YRBPA3k/dbRVIxlt9Gvtuk2owNzdoGQJMzBAHsnnYxpulc6MK9h7DmnoRqJgQdfutDD0y9zA4y3NBymDpe4MXAXSeqwrQB6puYj2DUeXGToIMEn5ocqEo2YFPbj2E+sptkb22OsCSJGqKfSYOBzMAMWJu3vi4XR4jYFGJNIC0wxz7dQTFuS5XamzWNOdpLmONnDUHXLAFz8RPCyUkxuMkaVDaFN7iGk294AEXvHHrZGFTSdBxtfruXJse5jwWmSOI13QRfotf8RZEnUiftw/vuVkHX4CoaLQ12ZoOUktzEdoTqLS21t6hvpOGAMe4vgiTBDja1nxHTmsXZ21XOpvuOzmgOuMpGsctx5BUw2yKjhneQM1xYF0HebQCsH2dCqkdDQ2ox7nPI9YBftAOLCATAES209bQkcd6WUA0FrWPzQIaYI8hG5L0tksZ+d4/wAhldpMiFhYvYbWBxYczRrMteALyAddNRHeqil6TJvwjB4mo90MY53AizfE2HitL/TYv3T+9n1SDNqEZWssBA7NgG8NQnPxJ3Fv7vsnX8En/Q9EUa93sYDGrey6T5cdVibTwHqniDnBHZJ3gagjiJHig4QkXzZR5+O5HxeKzsDT7QdpN9OfRNWmJ00JhzhGkXi3G0aacvutrZePJZkYHFwuYaXcdD/SwmOEgQRz1vvK18BjIcIMACw+fMon0EOxjEbZeGeraHNdN83ZJtHslIOqYiuMuTO0e60AW0GcW4W5LpmY5rgCIcNDaQVFbawYDDQYEwIED+48VnlXSNXG+3o5eox7TldTezcJBEN3Rbpe+9PbLrtY92YySCyZmJI11M5QfEpPG7ZfV7BuAdDfjbojDAvqNmAwE27cC0XgA9LwtH1syWnrZq4h7GMBZEcR0MBYdXF7zEeJ49yFj6VWkcroyzbe0xp177pBzS4ySBN/siMQlM6j0Urg53uMOBaxvfujvJXVv2iWguI3XmIvBMA2P3Xz/APNCc0lpvI3OEjThp4jin27dBME2NriR3yspxbejWE0o7Oxpbbe5wYDGpIyzI3ZYXI+kdNrK7iyGtdDg33ST2hxiZPG6Ozb4aCJBFzYG88DNlll5rQ4ukgRAAgXMB2ljbtDiqgmmLkkmhcVHNIdIJBtA57yN32XWYLCljfWPa0VYgC3Yb+o73rlGvLSHmeyQYOliLuP5r7lo0MXUrvyszOc6e7cXHc0aXVtGcWO1tvFxcGuGXRpA902136LOx2Oc+WGO1BJiATm1ygcRdOf8I1ZBNRjYFhLnHmfZF5WXtbDPpuGZulg8Xa7eCCNN/PVJY+DeVbFWCLW8Jtfn1UkTaY7Ntw7ud0NrySWxY95mQQf5xTNGlUI9h/7egtZUQO7MoM9Yxr3Obm3A2eP1XsLG99y66q8iYmNwG7kuLdgKrWQGi8GM2/obaFM0HVmN7Mt4jMHT8VMlZcW0b9QzuHeZulW0y92Um2UkncOR5X15LOO0ajWkvDDwOYt/dZIfj72vJDWxEEe0OIIKSixuS9OgxOzKWQF1NoIH5BBIFuV9TKS/C8P+vxP1SjdvvcbgRfdI6SL6fJV/Hh7n/gP96KkFxMV9eBGvL6qG1i6Z4aDWOqit7R6qjvy9StaMrC1KbbG+7Xci4cPHsh2aIgAnxWlsqmMrnRcEQTeNOK36piI5KZMqK9Odp0arG5i5ojRpPaI06Wnis7F7QL7NsJOnBaG0HkvN1it0H83oSXYpSfQ9szCBzjIlrfajfyHGbroSc1gItGXdbdGgGngs/ZtqQ8e/imGadx+IUy2y4KkXdexIIP5HTB5ADQ81mbVwuTKWOJY+4zatdAzN5/31WkdQf5vRNoMBo1LaQe/ihOmElaOeyktHBs3OkEjl5X+Kd2fTogzXe7UxTbp/lw6COqRFUgOMmQBB3i4U63N9QqZC7O3Zs7C1WdllM8MjYIOnagyVm1fR/IC6nUc4iJaWkOEXsQOv1XOMrObIBIBbccbhPY7EPmm3O7KYsCQN3BJJ/Sm18NHZux/WtJc/KAddXa7ieHHyXR4HDsotOSxPtEi7jrJAi99AsDZVQirAMAQAP3LVoVT67LNvVuMcw6JWcm7o0ilVjJYCc7nF5mZ0A5QDp1JQsVTa9haWiL2iAROtt/NVYb94+AU0t3U/NTZaWjnMJg3sqOyMLrdlxbMC4PaFg7S/wBU3WdiXGWsERdriw33wc0rQxzZa528RB4aoGHeSASZ0+Ku72RVaIw1Kq4AOa1lpjMDI6AGErijkMPLWToQYnyTERxvG88D9UDGMBsRMt3306oXYPoztoMY65eTwiSPisnHMGaGNOm4l084QiuowDAKDCBBLZJ3kzqtFoxezm6Ozqh0aR/3dnyN0f8AD63L9xXQPQ1QqP/Z" alt="">
                    <h3 class="capitalize m-0 font-bold">haya ahmed</h3>
                </div>
                <div class="info">
                    <div class="box p-[20px]  flex items-center text-left">
                        <h4 class="text-gray-500 w-full m-0 text-base font-normal">General Information</h4>
                        <div class="text-base">
                            <span class="text-gray-500 capitalize">full name </span>
                            <span class="capitalize">haya ahmed</span>
                        </div>
                        <div class="text-base">
                            <span class="text-gray-500 capitalize">gender: </span>
                            <span class="capitalize">female</span>
                        </div>
                        <div class="text-base">
                            <span class="text-gray-500 capitalize">country: </span>
                            <span class="capitalize">egypt</span>
                        </div>

                    </div>
                    <div class="box p-[20px]  flex items-center text-left">
                        <h4 class="text-gray-500 w-full m-0 text-base font-normal">Personal Information</h4>
                        <div class="text-base">
                            <span class="text-gray-500 capitalize">Email: </span>
                            <span class="">haya@gmail.com</span>
                        </div>
                        <div class="text-base">
                            <span class="text-gray-500 capitalize">phone: </span>
                            <span class="capitalize">01234567899</span>
                        </div>
                        <div class="text-base">
                            <span class="text-gray-500 capitalize">Date Of Birth: </span>
                            <span class="capitalize">10/10/1999</span>
                        </div>

                    </div>
                </div>
            </div>    
   </div>

     
        
    </div>
    
</template>
<script>
import sideBarVue from './sideBar.vue';
export default {
    components: { sideBarVue },
    name:'profile',
    data(){
        return{
            hello:"hi from home",
            username:""
    ,    }
    },
}
</script>
<style lang="scss" scoped>

.profile{
    position: relative;
    left: 30px;
    height: 100vh;
    max-height: 100%;
    @media (max-width:767px) {
       height:  calc(100% + 5rem);
        
    }
    .ProfileTitle{
   
   padding: 50px;
       text-transform: capitalize;
       color: #605f5f;
       font-family: 'Lora', serif;
       // letter-spacing: 1px;
       font-size: 22px;
       line-height: 1.2;
       h1{
         position:relative;
         &::before,&::after{
         position:absolute;
         content: "";
         height: 3px;
         bottom: -10px;
         left: 0;
         }
         &::before{
           background-color: white;
           width: 100px;
         }
         &::after{
           background-color: black;
           width: 40px;
         }
       }

       @media (max-width:800px) {
       font-size: 16px;
         font-weight: 500;
     
   }
   }
   .profile-content{
    font-family: 'Open Sans', sans-serif;
    margin: 50px ;
    margin-top: 20px;
    @media (max-width:560px) {
         margin-right: 30px;
        
    }

   .overView{
            @media (max-width:767px) {
                flex-direction: column;
                    
            }
    .img-box{
        padding: 30px;
      
        @media (max-width:767px) {
            border-right:none;
            border-bottom: 1px solid #eee;
                    
                }
        img{
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin-bottom: 10px;
            object-fit: cover;
        }
        h3{

        }
    }
    .info{
        .box{
            flex-wrap: wrap;
            border-bottom: 1px solid #eee;
            transition: 0.3s;
            @media (max-width:767px) {
                    // min-width: 200px;
                    text-align: center;
                    
                }
            &:hover{
                background-color: #f9f9f9;
            }
            div{
                // display: flex;
                // justify-content: space-evenly;
                min-width: 250px;
                padding: 10px 0 0 0;
                @media (max-width:767px) {
                    // min-width: 200px;
                    text-align: center;
                    
                }
               
            }
        }
    }

   }
}
}
html{
    background-color: rgb(219, 219, 220);
}
</style>