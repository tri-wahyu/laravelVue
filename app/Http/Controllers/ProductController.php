<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
    //
    public function all()
    {
        return Product::all();
    }
    // mengambil data by id
    public function show($id)
    {
        return Product::find($id);
    }

    // menambah data
    public function store(Request $request)
    {
        return Product::create($request->all());
    }

    // mengubah data
    public function update($id, Request $request)
    {
        $Product = Product::find($id);
        $Product->update($request->all());
        return $Product;
    }

    // menghapus data
    public function delete($id)
    {
        $Product = Product::find($id);
        $Product->delete();
        return 204;
    }
}
