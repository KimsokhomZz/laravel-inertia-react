<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\RoleResource;
use App\Models\Role;
use Illuminate\Validation\Rule;

class RoleController extends Controller
{
    public function index()
    {
        return inertia('Admin/Roles/RoleIndex', [
            'roles' => RoleResource::collection(Role::all())
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Roles/RoleCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:30', Rule::unique('roles', 'name'),]
        ]);
        // Role::create($validated);
        Role::create([
            'name' => $validated['name'],
            'guard_name' => 'web', // Default guard
        ]);
        return redirect()->route('roles.index')->with('success', 'Role created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Logic to fetch and return a specific user
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $role = Role::findOrFail($id);
        return inertia('Admin/Roles/RoleEdit', [
            'role' => new RoleResource($role),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Validate the request
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:30', Rule::unique('roles', 'name')->ignore($id)],
        ]);

        // Find the role
        $role = Role::findOrFail($id);

        // Update the role
        $role->update($validated);

        return redirect()->route('roles.index')->with('success', 'Role updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Find the role
        $role = Role::findOrFail($id);
        // Delete the role
        $role->delete();
        return back()->with('success', 'Role deleted successfully.');
    }
}
