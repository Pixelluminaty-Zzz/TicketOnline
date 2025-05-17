import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Pelicula {
  titulo: string;
  genero: string;
  duracion: string;
  clasificacion: string;
  rating: number;
  imagen: string;
}

@Component({
  selector: 'app-cartelera',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {
  usuarioNombre: string = 'Juan Pérez';

  peliculas: Pelicula[] = [
    {
      titulo: 'Una película de Minecraft',
      genero: 'Aventura, Comedia',
      duracion: '1h 41min',
      clasificacion: 'PG',
      rating: 4.5,
      imagen: '/Minecraft.jpg'
    },
    {
      titulo: 'Peter Pan: Pesadilla en Nunca Jamás',
      genero: 'Terror',
      duracion: '1h 28min',
      clasificacion: 'R+14',
      rating: 4.8,
      imagen: 'PeterPan.jpg'
    },
    {
      titulo: 'Blanca Nieves',
      genero: 'Aventura familiar, fantasía',
      duracion: '1h 49min',
      clasificacion: 'B+',
      rating: 0.8,
      imagen: '/Blancanieves.jpg'
    }
  ];

  peliculasFiltradas: Pelicula[] = [];

  ngOnInit(): void {
    this.peliculasFiltradas = this.peliculas;
  }

  buscarPelicula(event: Event): void {
    const valor = (event.target as HTMLInputElement).value.toLowerCase();
    this.peliculasFiltradas = this.peliculas.filter(pelicula =>
      pelicula.titulo.toLowerCase().includes(valor) ||
      pelicula.genero.toLowerCase().includes(valor)
    );
  }

  comprarBoleto(pelicula: Pelicula): void {
    alert(`Has seleccionado comprar boleto para: ${pelicula.titulo}`);
    // Aquí puedes agregar la lógica para redirigir a compra o abrir modal
  }

  cerrarSesion(): void {
    alert('Cerrando sesión...');
    // Aquí la lógica para cerrar sesión y navegar a login
  }
}
